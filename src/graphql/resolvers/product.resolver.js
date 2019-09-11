import { Product } from '../../models/product'

export const ProductResolver = {
    Query: {
        products: async () => Product.find()
    },
    Mutation: {
        createProduct: async (_, { ...product }) => {
            console.log(product)
            const { description,
                urlImage,
                price,
                stock } = product
            const productSave = new Cat(description,
                urlImage,
                price,
                stock)
            await productSave.save()
            return productSave
        }
    }
}