export const typeDefs = `#graphql
    type Property {
        name: String
    }

    type Query {
        properties: [Property]
    }
`;