//Modules
import { combineResolvers } from "graphql-resolvers";
//Middleware
import { isAuthenticated, isCategory } from "./middleware";
//Store
import { CategoryStore } from "../store/categoryStore";


module.exports = {
  Query: { 
    //return all recipes
    getCategories: combineResolvers(isAuthenticated,
      async () =>await CategoryStore.findAllCategories()),

    //return recipeID
    getOneCategory: combineResolvers( isAuthenticated,
      async (_: any, { id }: any) => await CategoryStore.findCategoryById(id))
  },

  Mutation: {
    //create category
    createCategory: combineResolvers(isAuthenticated,
      async (_: any, { input }: any) => {
      const { name } = input;
      let isCategory = await CategoryStore.findCategoryByName(name)
      if (!isCategory) {
         isCategory = await CategoryStore.createNewCategory(name)
      }
      return isCategory;
      }),
    //update recipe
    updateCategory: combineResolvers(isAuthenticated,isCategory,
      async (_: any, data: any) => {
        try {
          let categoryUpdate = await CategoryStore.updateCategory(data)
          return categoryUpdate;
        } catch (error) {
          throw new Error(`${error}`);
        }
      }
    ),
    //delete recipe
    deleteCategory: combineResolvers(isAuthenticated,isCategory,
      async (_: any, { id }: any) => await CategoryStore.deleteCategory(id))
  }, 
  //set category recipes
  Category: { 
    //find all recipes name  
    recipes: async (param: any) => {
     return await CategoryStore.findRecipesByCategory(param.id)
    },
  },
}; 
