//module
import { combineResolvers } from 'graphql-resolvers';

//middleware
import { isAuthenticated, isOwnerRecipe } from './middleware'

//store
import { RecipeStore } from '../store/recipeStore';
import { CategoryStore } from '../store/categoryStore';
import { UserStore } from '../store/userStore';


// RECIPE RESOLVERS  AND MUTATIONS

module.exports = { 
  Query: {
    //return all recipes
    getRecipes: combineResolvers(isAuthenticated,async ()=> await RecipeStore.findAllRecipes()),

    //return recipeID
    getOneRecipe: combineResolvers(isAuthenticated,
      async (_: any, { id }: any) => await RecipeStore.findRecipeById(id))
  },

  Mutation: {
     //if user ownerRecipe ..delete recipe 
    deleteRecipe: combineResolvers(isAuthenticated, isOwnerRecipe,
    async (_: any, { id }: any) => await RecipeStore.deleteRecipe(id)),
    
    //if user ownerRecipe ..update recipe 
    updateRecipe:combineResolvers( isAuthenticated , isOwnerRecipe,
      async (_: any, data: any) => await RecipeStore.updateRecipe(data)),
    
    //create recipe
    createRecipe:
      combineResolvers(isAuthenticated,
        async (_: any, { input }: any, { email }: any) => {
          try {
            let category = await CategoryStore.findCategoryByName(input.category);
            //search user
            const user = await UserStore.findUserByEmail(email);
        
            if (user) {
              if (!category) {
                category = await CategoryStore.createNewCategory(input.category);
              }
            }
            let newRecipe =await RecipeStore.createNewRecipe(category, input, user)
            return newRecipe;
          } catch (error) {
            throw new Error("Error to create recipe");
        }
    })
  },
  //set recipe schema
  Recipe: { 
    //find userid  
    user: async ({ user }: any) => await UserStore.findUserById(user.id) ,
    category: async ({ category }: any) =>await CategoryStore.findCategoryById(category.id)
  },
}; 
