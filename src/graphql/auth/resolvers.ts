import { Resolvers } from "../../generated/generatedTypes";
import { login, refresh } from "../../handlers/auth";

export const resolvers: Resolvers = {
    Mutation: {
        login,
        refresh
    }
};