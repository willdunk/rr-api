import { MutationResolvers } from "../generated/generatedTypes";
import { login as authModuleLogin } from '../modules/auth/login';
import { refresh as authModuleRefresh } from '../modules/auth/refresh';

export const login: MutationResolvers['login'] = (parent, { email, password }, contextValue, info) => {
    return authModuleLogin(email, password);
}

export const refresh: MutationResolvers['refresh'] = (parent, { refreshToken }, contextValue, info) => {
    return authModuleRefresh(refreshToken)
}