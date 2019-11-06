import { GraphQLServer } from 'graphql-yoga'
import resolvers, { fragmentReplacements } from './resolvers/index'
import { prisma } from './prisma'


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start(()=> {
  console.log("server running successfully");
})
