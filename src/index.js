import { GraphQLServer } from 'graphql-yoga'

import { typeDefs, resolvers } from './schema'

const schemaOptions = {
  typeDefs,
  resolvers
}

const serverOptions = {
  port: 5000
}

const server = new GraphQLServer(schemaOptions)

server.start(serverOptions, function({ port }) {
  console.log(`Server is running on http://localhost:${port}`)
})
