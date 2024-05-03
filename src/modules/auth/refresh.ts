import { RefreshToken, User } from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateHashedPassword } from "../../utils/generateHashedPassword";
import { isDefined } from "../../utils/ts/isDefined";
import { secrets } from "./secrets";

export const refresh = async (userId: string, refreshToken: string) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const matchingToken: RefreshToken | undefined = user.refreshTokenHashes?.find(token => token.refreshTokenHash === refreshToken);

    if (isDefined(matchingToken) && matchingToken.expiresOn < new Date()) {
        throw new Error('Unable to refresh token');
    }

    // Generate new tokens to be stored by the client that is requesting via refresh token
    const accessToken = jwt.sign({ userId: user.id }, secrets.accessTokenSecret, { expiresIn: '15m' });
    const newRefreshToken = jwt.sign({ userId: user.id }, secrets.refreshTokenSecret, { expiresIn: '30d' });

    // Store this new refresh token as a hash
    const newRefreshTokenHash = generateHashedPassword(newRefreshToken);
    await user.updateOne({ '$addToSet': { refreshTokenHashes: newRefreshTokenHash } });

    return { accessToken, refreshToken: newRefreshToken };
}