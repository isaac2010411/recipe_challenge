
import { gql } from 'apollo-server-express';


module.exports = gql`

  extend type Query {
    getCategories : [Category]
    getOneCategory (id:ID):Category
  }

  type Category {
    id:ID!
    name:String!
    recipes:[Recipe]
  }
`;
