import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { Request, Response } from "express";
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
  playground: true,
  context: async ({ req }: ExpressContext) => {
      const isUser = await verifyUser(req.headers.authorization);
      return {
        email: isUser.email,
        isLogged:isUser.user
      }
    }
});
const port = process.env.PORT || 3000;

apolloServer.applyMiddleware({
  app,
  path: '/graphql'
});

app.use('/', async (req: Request, res: Response) => {
  res.json({path:`${apolloServer.graphqlPath}`})
})

app.listen( port , async () => {
  try {
    //Database Conection __
    await createConnection(config);
  
  } catch (error) {
    throw new Error("Error database connect");
  }
  
})
