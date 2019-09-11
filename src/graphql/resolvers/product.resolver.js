import Product from '../../models/product'

export const ProductResolver = {
    Query: {
        products: async () => Product.find()
    }
}