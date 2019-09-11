import { CatResolver } from './resolvers/cat.resolver'
import { ProductResolver } from './resolvers/product.resolver'

export const resolvers = {
    ...CatResolver,
    ...ProductResolver
}