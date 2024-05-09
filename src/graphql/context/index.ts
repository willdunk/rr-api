import { ContextFunction } from "@apollo/server";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import jwt from 'jsonwebtoken';
import { secrets } from "../../modules/jwt/secrets";
import { isDefined } from "../../utils/ts/isDefined";
import { RRGraphQLContext } from "../../types/RRGraphQLContext";

export const createContext: ContextFunction<[StandaloneServerContextFunctionArgument], RRGraphQLContext> = async ({ req, res }) => {
    const authorizationHeader = req.headers.authorization;
    if (isDefined(authorizationHeader)) {
        const decoded = jwt.verify(authorizationHeader, secrets.accessTokenSecret);
        console.log(decoded);
    }

    return { userId: undefined, accessToken: authorizationHeader };
}