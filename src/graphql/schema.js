import { makeExecutableSchema } from 'apollo-server'
import { Query } from './query.graphql'
import { CatTypeDefs } from './typedefs/cat.typedefs'
import { ProductTypeDefs } from './typedefs/product.typedefs'

export const schema = makeExecutableSchema({
    typeDefs: [Query, CatTypeDefs, ProductTypeDefs],
    resolvers: {},
})