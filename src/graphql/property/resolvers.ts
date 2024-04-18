import { getProperties } from "../../modules/property/getProperties";

export const resolvers = {
    Query: {
        properties: () => getProperties(),
    },
};