import merge from 'lodash/merge'

import * as rootSchema from './root'
import * as sum from './modules/sum'

export const typeDefs = `
  ${rootSchema.typeDefs}
  ${sum.typeDefs}
`

export const resolvers = merge(rootSchema.resolvers, sum.resolvers)
