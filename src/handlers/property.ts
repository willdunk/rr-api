import { QueryResolvers, MutationResolvers } from "../generated/generatedTypes";
import { getProperties } from '../modules/property/getProperties';
import { createNewProperty as propertyModuleCreateNewProperty } from '../modules/property/createNewProperty';

export const properties: QueryResolvers['properties'] = (parent, args, contextValue, info) => {
    return getProperties();
}

export const createNewProperty: MutationResolvers['createNewProperty'] = (parent, { property }, contextValue, info) => {
    return propertyModuleCreateNewProperty(property);
}