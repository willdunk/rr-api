import { MutationCreateNewPropertyArgs, MutationResolvers, PropertyInput, Resolvers } from "../../generated/generatedTypes";
import { createNewProperty } from "../../modules/property/createNewProperty";
import { getProperties } from "../../modules/property/getProperties";

export const resolvers: Resolvers = {
    Query: {
        properties: (parent, args, contextValue, info) => {
            console.log(contextValue);
            return getProperties()
        },
    },
    Mutation: {
        createNewProperty: (parent, args: MutationCreateNewPropertyArgs, contextValue, info) => createNewProperty(args.property)
    }
};