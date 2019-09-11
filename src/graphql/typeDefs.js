import { CatTypeDefs } from './typedefs/cat.typedefs'
import { ProductTypeDefs } from './typedefs/product.typedefs'

export const typeDefs = {
    ...ProductTypeDefs,
    ...CatTypeDefs
}