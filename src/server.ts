import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
const express = require('express');
const dotenv = require('dotenv');
require('reflect-metadata');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const resolvers = require('./lib/resolvers');
const { createConnection } = require('typeorm');
const typeDefs = require('./lib/typeDefs');
const { verifyUser }= require('./helper')
dotenv.config(); 
const  config = require('../ormconfig');
console.log(config) 
//set env variables 
const app = express(); 


app.use(cors())
 
//middlewares
app.use(express.json()); 


const apolloServer = new ApolloServer({
  typeDefs, 
  resolvers,
  context: async ({ req }: ExpressContext) => {
    try {
      const isUser = await verifyUser(req.headers.authorization);
      return {
        email: isUser.email,
        isLogged:isUser.user
      }
    } catch (error) {
      throw new Error("Loggin to continue");
      
    }
    }
});


apolloServer.applyMiddleware({
  app,
  path: '/graphql'
});

app.use('/', (req:Request, res:Response) => {
  console.log('si')
})

app.listen(process.env.API_PORT || 2000, async () => {
  //Database Conection __

  await createConnection(config);
  console.log('port')
  console.log(apolloServer.graphqlPath)
})
