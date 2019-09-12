import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import mongoose from 'mongoose'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typedefs'
import 'dotenv/config'

(async () => {

    await mongoose.connect(process.env.DB_CONNECTION
        , { useNewUrlParser: true })

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    })

    const server = new ApolloServer({ schema });

    server.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
})() 