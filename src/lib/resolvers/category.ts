import { getRepository } from "typeorm";
import { Category } from "../../entities/categoryEntity";
import { Recipe } from "../../entities/recipeEntity";

// CATEGORY RESOLVERS AND MUTATIONS

module.exports = {
  Query: { 
    //return all recipes
    getCategories:async () => {
      let categories = await getRepository<Category>(Category)
      .find({relations:["recipes"]})
      return categories ;
    },

    //return recipeID
    getOneCategory: async (_: any, { id }: any) => {
      let category = await getRepository(Category)
      .findOne({ id })
      return category;
    }
  },

  Mutation: {
    createCategory:async (_: any, { input }: any) => {
      const { name } = input;
      let isCategory = await getRepository(Category)
      .findOne({ name })
      
      if (!isCategory) {
         isCategory = await getRepository<Category>(Category)
        .create({
          name,
      })
      await getRepository(Category)
        .save(isCategory);
      }
      return isCategory;
    }
  }, 
  //set category recipes
  Category: { 
    //find all recipes name  
    recipes: async ({ id }: any) => {
      const recipes = await getRepository<Recipe>(Recipe)
        .find({relations:["user"]})
      return recipes;
    },
    
  },
}; 
