import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import { schema } from './graphql/schema'
import 'dotenv/config'

(async () => {

    await mongoose.connect(process.env.DB_CONNECTION
        , { useNewUrlParser: true })

    const server = new ApolloServer({ schema });

    server.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })
})() 