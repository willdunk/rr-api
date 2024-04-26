import { createNewProperty } from "../../modules/property/createNewProperty";
import { getProperties } from "../../modules/property/getProperties";

export const resolvers = {
    Query: {
        properties: () => getProperties(),
    },
    Mutation: {
        // TODO: @willdunk This typing is why codegen is useful
        createNewProperty: (parent: any, args: any, contextValue: any, info: any) => createNewProperty(args?.property)
    }
};