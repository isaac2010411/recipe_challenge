const express = require('express');
const { ApolloServer , gql   } = require('apollo-server-express');
const cors = require('cors');
const dotenv = require('dotenv');
const uuid = require('uuid');
const resolvers = require('./lib/resolvers');
const typeDefs = require('./lib/typeDefs');


//set env variables
dotenv.config();

const app = express();


app.use(cors())
 
//middlewares
app.use(express.json()); 


const apolloServer = new ApolloServer({
  typeDefs, 
  resolvers 
});


apolloServer.applyMiddleware({ app, path: '/graphql' });

app.use('/', (req, res) => {
  console.log('si')
})

app.listen(process.env.API_PORT || 2000,() => {
  console.log('port')
  console.log(apolloServer.graphqlPath)
})
