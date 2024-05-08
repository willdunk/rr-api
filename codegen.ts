import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/**/*.graphql',
    generates: {
        './src/generated/generatedTypes.ts': {
            config: {
                useIndexSignature: true,
                contextType: '../types/RRGraphQLContext#RRGraphQLContext'
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
export default config;