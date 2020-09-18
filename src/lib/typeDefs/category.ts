
import { gql } from 'apollo-server-express';


module.exports = gql`

  extend type Query {
    getCategories : [Category]
    getOneCategory (id:ID):Category
  }

  input createCategoryInut {
    name:String!
  }

  input updateCategoryInput{
    name:String
  }
  
  extend type Mutation {
    updateCategory (id:ID! , input:updateCategoryInput):Category
    createCategory (input: createCategoryInut!): Category
    deleteCategory(id:ID!) :Boolean
  }

  type Category {
    id:ID!
    name:String!
    recipes:[Recipe]
  }
`;
