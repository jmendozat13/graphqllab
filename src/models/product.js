import { Schema, model } from 'mongoose';

const productSchema = Schema({
    description: {
        type: String,
        min: 3,
        max: 250,
        required: true
    },
    urlImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    }
})

export default model('Product', productSchema)