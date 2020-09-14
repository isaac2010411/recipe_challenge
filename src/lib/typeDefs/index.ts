
import { gql } from 'apollo-server-express';
const userTypeDef = require('./user');
const recipeTypeDef = require('./recipe');
const categoryTypeDef = require('./category')



const typeDefs = gql`

  scalar Date

  type Query {
    _:String
  },

  type Mutation{
    _:String
  }
`
module.exports = [
  typeDefs,
  userTypeDef,
  recipeTypeDef,
  categoryTypeDef
]