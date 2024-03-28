import { connectDB } from './config/db';
import { typeDefs } from './graphql/schemas/property';
import { resolvers } from './graphql/resolvers/property';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = 3000;

const startDB = async () => {
    try {
        await connectDB("mongodb://localhost:27017/rr");
        console.log('Mongodb is connected!!!')
        // The ApolloServer constructor requires two parameters: your schema
        // definition and your set of resolvers.

        const { url } = await startStandaloneServer(server, {
            listen: { port },
        });

        console.log(`🚀  Server ready at: ${url}`);
    } catch (error) {
        console.log(error);
    }
}

startDB();