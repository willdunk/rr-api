import { connectDB } from './config/db';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFiles } from '@graphql-tools/load-files';
import { createContext } from './graphql/context';
import { RRGraphQLContext } from './types/RRGraphQLContext';

const port = 3000;

const main = async () => {
    try {
        await connectDB("mongodb://localhost:27017/rr");
        console.log("MongoDB Connected");

        const schema = makeExecutableSchema({
            typeDefs: await loadFiles('src/graphql/**/*.graphql'),
            resolvers: await loadFiles('src/graphql/**/resolvers.{ts,js}'),
        });
        console.log("GraphQL Schema Created");

        const server = new ApolloServer<RRGraphQLContext>({ schema });
        console.log("Apollo Server Created")

        const { url } = await startStandaloneServer(server, {
            listen: { port },
            context: createContext,
        });

        console.log(`Server ready at: ${url}`);
    } catch (error) {
        console.log(error);
    }
}

main().catch(error => {
    console.error(error)
    process.exit(1)
});