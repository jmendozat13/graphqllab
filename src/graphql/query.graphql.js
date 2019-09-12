import { gql } from 'apollo-server'


export const Query = gql`
  type Query {
    cats: [Cat!]!
    products: [Product!]!
  }
`