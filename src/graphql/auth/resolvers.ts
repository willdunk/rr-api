import { MutationLoginArgs, MutationRefreshArgs, Resolvers } from "../../generated/generatedTypes";
import { login } from "../../modules/auth/login";
import { refresh } from "../../modules/auth/refresh";
import { RRGraphQLContext } from "../context";

export const resolvers: Resolvers = {
    Mutation: {
        login: (parent, args: MutationLoginArgs, contextValue: RRGraphQLContext, info) => login(args.email, args.password),
        refresh: (parent, args: MutationRefreshArgs, contextValue: RRGraphQLContext, info) => refresh(args.refreshToken)
    }
};