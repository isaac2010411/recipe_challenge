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
      async (_: any, data: any) => {
        try {
          let result = await RecipeStore.updateRecipe(data);
          return result;

        } catch (error) {
          throw new Error(error);
        }
      }),
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

                if (input.category.length < 3) {
                  throw new Error("three letter minimin category");
                }
                
                category = await CategoryStore.findCategoryByName(input.category)
                if (!category) {
                  category = await CategoryStore.createNewCategory(input.category);
                }    
              
              }
            }
            //create recipe;
            let newRecipe = await RecipeStore.createNewRecipe(category, input, user);

            return newRecipe;


          } catch (error) {
            throw new Error(error);
        }
    })
  },
  //set recipe schema
  Recipe: { 
    //find userid  
    user: async ({ user }: any) => await UserStore.findUserById(user.id) ,
    category: async ({ category }: any) => {
      console.log(category)
      console.log(category.id)
      let categoryRecipe = await CategoryStore.findCategoryById(category?.id);
      console.log(categoryRecipe)
      return categoryRecipe;
    }
  },
}; 
