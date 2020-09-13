import { recipesConstatns, users , Categories} from '../../constatns';

const uuid = require('uuid');



// CATEGORY RESOLVERS AND MUTATIONS

module.exports = {
  Query: {
    //return all recipes
    getCategories: () => {
      return Categories
    },

    //return recipeID
    getOneCategory: (_, { id }) => {
      return Categories.find( category => category.id === id )
    }
  },

  Mutation: {

  },
  //set category recipes
  Category: { 
    //find all recipes name  
    recipes: (parent) => {
      let recipes = recipesConstatns.filter(recipe => recipe.category.name === parent.name)
      return recipes;
    }
  },
  
}; 
