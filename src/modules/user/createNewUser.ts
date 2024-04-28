import { type User as UserType, User } from "../../models/user";
import { generateHashedPassword } from "../../utils/generateHashedPassword";

type RequiredAttributes = 'firstName' | 'lastName' | 'email'

type NewUserInput = Pick<UserType, RequiredAttributes> & { password: string };

export const createNewUser = async (input: NewUserInput) => {
    const passwordHash = await generateHashedPassword(input.password);
    const newUser = User.create({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        passwordHash,
        memberProperties: [],
    });
    return newUser;
}