import { recipesConstatns, users } from '../../constatns';
const uuid = require('uuid');



// RECIPE RESOLVERS  AND MUTATIONS

module.exports = {
  Query: {
    //return all recipes
    getRecipes: () => {
      return recipesConstatns
    },

    //return recipeID
    getOneRecipe: ( _ , { id }) => {
      return recipesConstatns.find( recipe => recipe.id === id )
    }
  },

  Mutation: {
    createRecipe: (_, { input }) => {
      const newRecipe = {
        ...input,
        id: uuid.v4(),
        user: {
          id:input.user
        }
      };
      console.log(newRecipe)
      recipesConstatns.push(newRecipe)
      return newRecipe
    }
  },
  //set recipe
  Recipe: { 
    //find userid  
    user: (parent) => {
      return users.find( user => user.id === parent.user.id )
    }
  },
  
}; 
