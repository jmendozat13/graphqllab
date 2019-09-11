import { gql } from 'apollo-server'

export const CatTypeDefs = gql`
        type Query {
            hello: String!
            cats: [Cat!]!
        }
       
        type Mutation {
            createCat(name: String!): Cat!
            editCat(id: ID, name: String): Cat
            deleteCat(id: ID): DeleteResponse
        }
        
        type Cat {
            id: ID!
            name: String!
        }
        
        type DeleteResponse {
            ok: Boolean!
        }
    `