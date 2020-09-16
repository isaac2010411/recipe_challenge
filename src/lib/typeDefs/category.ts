
import { gql } from 'apollo-server-express';


module.exports = gql`

  extend type Query {
    getCategories : [Category]
    getOneCategory (id:ID):Category
  }

  input createCategoryInut {
    name:String!
  }
  
  extend type Mutation {
    createCategory (input: createCategoryInut!): Category
  }

  type Category {
    id:ID!
    name:String!
    recipes:[Recipe]
  }
`;
