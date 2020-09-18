import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import { Recipe } from '../../entities/recipeEntity';
import { CategoryStore } from './categoryStore';



export const RecipeStore =
{
  findAllRecipes: async () => {
    try {
      const recipes = await getRepository(Recipe)
        .find({ relations: ["user", "category"] })
      return recipes;
    } catch (error) {
      throw new Error("not found");
    }
  },
  findRecipeByPropietary: async (user: any) => {
    try {
      const recipes = await getRepository<Recipe>(Recipe)
        .find({user})
      return recipes;
    } catch (error) {
      throw new Error("error to delete");
    }
  },
  findRecipeById: async (id: any) => {
    try {
      const recipe = await getRepository(Recipe)
        .findOne({ id }, { relations: ["user", "category"] })
      
      return recipe;

    } catch (error) {
      throw new Error("User not found , incorrected id");
      
    }
  },

  deleteRecipe: async (id: any) => {
    try {
      let recipe = await getRepository(Recipe)
      recipe.delete(id)
      return true;

    } catch (error) {
      throw new Error("error to delete");
    }
  },

  createNewRecipe: async (category: any,data:any , user: any) => {
  
    let newrecipe = await getRepository<Recipe>(Recipe)
      .create({
        id: v4(),
        ...data,
        category,
        user: user?.id
      });
    
    const result = await getRepository(Recipe)
    .save(newrecipe);

    return result;
  },
  updateRecipe: async (data: any) => {
    let { input, id } = data;
    let recipe = await RecipeStore.findRecipeById(id);
    let isCategory;

    if (input.category !== recipe?.category.name) {
        
        if (input.category.length < 3) {
          throw new Error("three letter minimin");
        }

      isCategory = await CategoryStore.findCategoryByName(input.category)

      if (!isCategory) {
        isCategory = await CategoryStore.createNewCategory(input.category)
      }
      
    } 
      //Edit recipe
    console.log(isCategory)
      await getRepository(Recipe)
        .createQueryBuilder()
        .where("recipe.id = :id", {id})
        .update(Recipe)
        .set({
          name: input.name,
          ingredients: input.ingredients,
          description: input.description,
          category:isCategory
        })
        .execute()

       
      let newRecipe = await getRepository<Recipe>(Recipe)
        .findOne({ id },{relations:["category"]})
    
    return newRecipe;
  }
}