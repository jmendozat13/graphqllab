import { gql } from 'apollo-server'

export const ProductTypeDefs = gql`
        type Query {
            products: [Product!]!
        }
        
        type Product {
            id: ID!
            description: String
            urlImage: String
            price: Float
            stock: Float
        }
    `