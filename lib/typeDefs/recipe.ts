import { gql } from 'apollo-server-express';

module.exports = gql`

  extend type Query {
    getRecipes(id:ID!):Recipe
    getOneRecipe:[Recipe!]
  }
  
  type Recipe {
    id:ID! 
    name:String!
    description:String!
    ingredients:String!
    category:Category!
    user:User! 
  } 

  extend type Mutation {
    createRecipe (input: createRecipeInput!): Recipe
  }


  input createRecipeInput{
    name:String
    description:String
    ingredients:String
    category:String
    user:ID!
  }

`;
