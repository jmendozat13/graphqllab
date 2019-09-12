import { gql } from 'apollo-server'

export const ProductTypeDefs = gql`       
        type Product {
            id: ID!
            description: String
            urlImage: String
            price: Float
            stock: Float
        }
    `