import { Cat } from '../../models/cat'

export const CatResolver = {
    Query: {
        cats: async () => Cat.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name })
            await kitty.save()
            return kitty
        },
        editCat: async (_, { id, name }) => {
            const editCat = await Cat.findByIdAndUpdate(id, { name: name })
            return editCat
        },
        deleteCat: async (_, { id }) => {
            const deleteCat = await Cat.deleteOne({ _id: id })
            const ok = Boolean(deleteCat)
            return { ok };
        }
    }
}