import { Resolvers } from "../../generated/generatedTypes";
import { properties, createNewProperty } from '../../handlers/property';

export const resolvers: Resolvers = {
    Query: {
        properties,
    },
    Mutation: {
        createNewProperty,
    }
};