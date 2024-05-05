import { type RefreshToken, User } from "../../models/user";
import jwt from 'jsonwebtoken';
import { generateHashedPassword } from "../../utils/generateHashedPassword";
import { isDefined } from "../../utils/ts/isDefined";
import { secrets } from "./secrets";

export const refresh = async (refreshToken: string) => {
    const decoded = jwt.verify(refreshToken, secrets.refreshTokenSecret) as { userId: string };
    const user = await User.findById(decoded.userId);
    if (!user) {
        throw new Error('User not found');
    }

    const matchingToken: RefreshToken | undefined = user.refreshTokenHashes?.find(token => token.refreshTokenHash === refreshToken);

    if (isDefined(matchingToken) && matchingToken.expiresOn < new Date()) {
        throw new Error('Unable to refresh token');
    }

    const accessToken = jwt.sign({ userId: user._id }, secrets.accessTokenSecret, { expiresIn: '15m' });
    const newRefreshToken = jwt.sign({ userId: user._id }, secrets.refreshTokenSecret, { expiresIn: '30d' });

    const expiresOn = new Date();
    expiresOn.setDate(expiresOn.getDate() + 30);

    const newRefreshTokenHash = await generateHashedPassword(newRefreshToken);
    const newRefreshTokenObject: RefreshToken = { refreshTokenHash: newRefreshTokenHash, expiresOn };

    // TODO: @willdunk: user updates for mongoose are not propagating types to all attributes
    await user.updateOne({ '$addToSet': { refreshTokenHashes: newRefreshTokenObject } });

    return { accessToken, refreshToken: newRefreshToken };
}