export const typeDefs = `
  type Query {
    hello(name: String): String!
  }
  type Mutation {
    test: String!
  }
`

export const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name || 'World'}`
    }
  },
  Mutation: {
    test: () => {
      return 'It works!'
    }
  }
}
