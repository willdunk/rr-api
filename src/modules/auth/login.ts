import { User } from "../../models/user";
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

    // Generate new tokens to be stored by the client that is requesting this login
    const accessToken = jwt.sign({ userId: user.id }, secrets.accessTokenSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id }, secrets.refreshTokenSecret, { expiresIn: '30d' });

    // Store this new refresh token as a hash
    const newRefreshTokenHash = generateHashedPassword(refreshToken);
    await user.updateOne({ '$addToSet': { refreshTokenHashes: newRefreshTokenHash } });

    return { accessToken, refreshToken };
}