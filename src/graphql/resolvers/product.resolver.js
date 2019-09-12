import Product from '../../models/product'

export default {
    Query: {
        products: async () => Product.find()
    },
    Mutation: {
        addProduct: async (_, args) => {
            const { description,
                urlImage,
                price,
                stock } = args.product
            const productSave = new Product({
                description,
                urlImage,
                price,
                stock
            })
            await productSave.save()
            return productSave
        }
    }
}