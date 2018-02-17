export const typeDefs = `
  extend type Query {
    sum(numbers: [Int]!): Int!
  }
  extend type Mutation {
    write(numbers: [Int]!): String!
  }
`

export const resolvers = {
  Query: {
    sum: (_, { numbers }) => {
      return numbers.reduce((prev, cur) => prev + cur, 0)
    }
  },
  Mutation: {
    write: (_, { numbers }) => {
      return `${numbers} have been saved to the database.`
    }
  }
}
