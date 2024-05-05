import { type RefreshToken, User } from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateHashedPassword } from "../../utils/generateHashedPassword";
import { secrets } from "./secrets";

export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const accessToken = jwt.sign({ userId: user._id }, secrets.accessTokenSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user._id }, secrets.refreshTokenSecret, { expiresIn: '30d' });

    const expiresOn = new Date();
    expiresOn.setDate(expiresOn.getDate() + 30);

    const newRefreshTokenHash = await generateHashedPassword(refreshToken);
    const newRefreshTokenObject: RefreshToken = { refreshTokenHash: newRefreshTokenHash, expiresOn };

    // TODO: @willdunk: user updates for mongoose are not propagating types to all attributes
    await user.updateOne({ '$addToSet': { refreshTokenHashes: newRefreshTokenObject } });

    return { accessToken, refreshToken };
}