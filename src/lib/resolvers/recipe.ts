import  {recipesConstatns , users } from '../../constatns';

const {uuid}:any = require('uuid');



// RECIPE RESOLVERS  AND MUTATIONS

module.exports = {
  Query: {
    //return all recipes
    getRecipes: () => {
      return recipesConstatns
    },

    //return recipeID
    getOneRecipe: ( _:any , { id}:any) => {
      return recipesConstatns.find( (recipe:any) => recipe.id === id )
    }
  },

  Mutation: {
    createRecipe: ( _:any , { input }:any) => {
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
    user: (parent:any) => {
      return users.find( (user:any) => user.id === parent.user.id )
    }
  },
  
}; 
