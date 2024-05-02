import { ContextFunction } from "@apollo/server";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";

export type RRGraphQLContext = {
    authorizationToken: string | undefined;
}

export const createContext: ContextFunction<[StandaloneServerContextFunctionArgument], RRGraphQLContext> = async ({ req, res }) => {
    return { authorizationToken: req.headers.authorization || undefined };
}