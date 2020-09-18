import { gql } from 'apollo-server-express';

module.exports = gql`

  extend type Query {
    getRecipes:[Recipe!]
    getOneRecipe(id:ID!):Recipe
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
    updateRecipe (id:ID! , input: updateRecipeInput ): Recipe
    deleteRecipe(id:ID!):Boolean
  }
  
  input updateRecipeInput{
    name:String
    description:String
    ingredients:String
    category:String
  }

  input createRecipeInput{
    name:String
    description:String
    ingredients:String
    category:String
  }

`;
