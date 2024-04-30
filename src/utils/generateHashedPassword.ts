import bcrypt from 'bcryptjs';

export async function generateHashedPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Password hashing failed');
    }
}