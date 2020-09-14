const { recipesConstatns, categories } = require('./../../constatns')

// CATEGORY RESOLVERS AND MUTATIONS

module.exports = {
  Query: { 
    //return all recipes
    getCategories: () => {
      return categories 
    },

    //return recipeID
    getOneCategory: ( _:any, { id }:any) => {
      return categories.find((category:any)=> category.name === id )
    }
  },

  Mutation: {

  }, 
  //set category recipes
  Category: { 
    //find all recipes name  
    recipes: (parent:any) => {
      let recipes = recipesConstatns.filter((recipe:any) => recipe.category.name === parent.name)
      return recipes;
    }
  },
}; 
