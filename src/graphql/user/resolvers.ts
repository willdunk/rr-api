import { MutationCreateNewUserArgs, QueryUserArgs, Resolvers } from "../../generated/generatedTypes";
import { addNewPropertyToUser } from "../../modules/user/addNewPropertyToUser";
import { createNewUser } from "../../modules/user/createNewUser";
import { getUser } from "../../modules/user/getUser";

export const resolvers: Resolvers = {
    Query: {
        user: (parent, args: QueryUserArgs, contextValue, info) => getUser(args.userId),
    },
    Mutation: {
        createNewUser: (parent, args: MutationCreateNewUserArgs, contextValue, info) => createNewUser(args.user),
        addNewPropertyToUser: (parent, args, contextValue, info) => addNewPropertyToUser(args.userId, args.propertyId),
    }
};