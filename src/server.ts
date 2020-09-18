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

app.use('/', async (req: Request, res: Response) => {
  res.json({path:`${apolloServer.graphqlPath}`})
})

app.listen(process.env || 3000, async () => {
  try {
    //Database Conection __
    await createConnection(config);
  
  } catch (error) {
    throw new Error("Error database connect");
    
  }
  
})
