const express = require('express');
const dotenv = require('dotenv');
require('reflect-metadata');
const { ApolloServer , gql   } = require('apollo-server-express');
const cors = require('cors');
const resolvers = require('./lib/resolvers');
const { createConnection } = require('typeorm');
const typeDefs = require('./lib/typeDefs');
dotenv.config(); 
const  config  = require('./ormconfig');
console.log(config)
//set env variables 
const app = express(); 


app.use(cors())
 
//middlewares
app.use(express.json()); 
//Database Conection __


const apolloServer = new ApolloServer({
  typeDefs, 
  resolvers 
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use('/', (req:Request, res:Response) => {
  console.log('si')
})

app.listen(process.env.API_PORT || 2000, async () => {
  await createConnection(config);
  console.log('port')
  console.log(apolloServer.graphqlPath)
})
