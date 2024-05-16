import { Resolvers } from "../../generated/generatedTypes";
import { user, createNewUser, addNewPropertyToUser } from "../../handlers/user";

export const resolvers: Resolvers = {
    Query: {
        user,
    },
    Mutation: {
        createNewUser,
        addNewPropertyToUser,
    }
};