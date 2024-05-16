import { QueryResolvers, MutationResolvers } from "../generated/generatedTypes";
import { getUser } from '../modules/user/getUser';
import { createNewUser as userModuleCreateNewUser } from '../modules/user/createNewUser';
import { addNewPropertyToUser as userModuleAddNewPropertyToUser } from '../modules/user/addNewPropertyToUser';

export const user: QueryResolvers['user'] = (parent, { userId }, contextValue, info) => {
    return getUser(userId);
}

export const createNewUser: MutationResolvers['createNewUser'] = (parent, { user }, contextValue, info) => {
    return userModuleCreateNewUser(user);
}

export const addNewPropertyToUser: MutationResolvers['addNewPropertyToUser'] = (parent, { userId, propertyId }, contextValue, info) => {
    return userModuleAddNewPropertyToUser(userId, propertyId);
}