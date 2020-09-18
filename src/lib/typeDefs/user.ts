
import { gql } from 'apollo-server-express';
module.exports = gql`

  extend type Query {
    getMyRecipes: User
  }

  input singUpInputUser {
    name:String!
    email:String!
    password:String!
  }

  input loginInputUser {
    email:String!
    password:String!
  }

  extend type Mutation {
    signUp(input: singUpInputUser!):User
    login(input:loginInputUser!):Token
  }

  type Token {
    token:String!
  }

  type User {
    id:ID!
    name:String!
    email:String!
    recipes:[Recipe!]
    createdAt:Date!
    updatedAt:Date!
  }

`;
