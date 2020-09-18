//module
import { skip } from 'graphql-resolvers'
//Store
import { CategoryStore } from '../../store/categoryStore';
import { RecipeStore } from '../../store/recipeStore';

export const isAuthenticated = (_: any, __: any, { email }: any) => {

  if (!email) {
    throw new Error("Login to contiued");
  }

  return skip;
}

export const isOwnerRecipe = async (_: any, { id }: any, input: any) => {
  
  let isRecipe = await RecipeStore.findRecipeById(id)
  if (!isRecipe) {

    throw new Error("Recipe not found");

  } else if (isRecipe.user.id !== input.isLogged.id) {
    
    throw new Error("Forbiden");
  }

  return skip;
}

export const isCategory = async (_: any, data: any) => {
  let category = await CategoryStore.findCategoryById(data.id);
  if (!category) {
    throw new Error("Category not found");
  }
  
  return skip
}