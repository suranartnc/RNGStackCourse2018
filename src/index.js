import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name || 'World'}`
    }
  }
}

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
