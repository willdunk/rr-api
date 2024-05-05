import { ContextFunction } from "@apollo/server";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import jwt from 'jsonwebtoken';
import { secrets } from "../../modules/auth/secrets";
import { isDefined } from "../../utils/ts/isDefined";

export type RRGraphQLContext = {
    userId: string | undefined;
    accessToken: string | undefined;
}

export const createContext: ContextFunction<[StandaloneServerContextFunctionArgument], RRGraphQLContext> = async ({ req, res }) => {
    const authorizationHeader = req.headers.authorization;
    if (isDefined(authorizationHeader)) {
        const decoded = jwt.verify(authorizationHeader, secrets.accessTokenSecret);
        console.log(decoded);
    }

    return { userId: undefined, accessToken: authorizationHeader };
}