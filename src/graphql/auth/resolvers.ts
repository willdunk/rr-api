import { MutationLoginArgs, MutationRefreshArgs, Resolvers } from "../../generated/generatedTypes";
import { RRGraphQLContext } from "../context";

export const resolvers: Resolvers = {
    Mutation: {
        login: (parent, args: MutationLoginArgs, contextValue: RRGraphQLContext, info) => 
    }
};