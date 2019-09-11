import { gql } from 'apollo-server-express'

export const ProductTypeDefs = gql`
        type Query {
            products: [Product!]!
        }
       
        type Mutation {
            createProduct(name: String!): Cat!
        }
        
        type Product {
            id: ID!
            description: String!
            urlImage: String!
            price: Number!
            stock: Number!
        }
    `