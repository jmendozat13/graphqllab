import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import 'dotenv/config'

(async () => {

    await mongoose.connect(process.env.DB_CONNECTION
        , { useNewUrlParser: true })
    console.log('MongoDB Connect!')

    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app })
    app.listen({ port: 4000 }, () => {
        console.log(`Server ready at http://localhost:4000 ${server.graphqlPath}`)
    })
})() 