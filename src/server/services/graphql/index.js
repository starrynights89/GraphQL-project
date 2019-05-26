// Apollo server

import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './resolvers';
import Schema from './schema';

// Add Schema and Resolvers to GraphQL
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

const server = new ApolloServer({
  schema: executableSchema,
  context: ({ req }) => req,
});

export default server;
