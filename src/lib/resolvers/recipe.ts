import { getRepository } from 'typeorm';
import {combineResolvers} from 'graphql-resolvers';
import {isAuthenticated} from './middleware'
import { User } from '../../entities/userEntity';
import  { v4 } from 'uuid'
import { Recipe } from '../../entities/recipeEntity';


// RECIPE RESOLVERS  AND MUTATIONS

module.exports = { 
  Query: {
    //return all recipes
    getRecipes: async () => {
      let recipes = await getRepository<Recipe>(Recipe)
        .find({ relations: ["user"] })
      console.log(recipes)
      return recipes;
    },

    //return recipeID
    getOneRecipe: async (_: any, { id }: any) => {
      let recipe = await getRepository<Recipe>(Recipe)
        .findOne(id ,
          { relations: ["user"]}
        )
      return recipe;
    }
  },

  Mutation: {
    createRecipe:
      combineResolvers( isAuthenticated,

      async (_: any, { input }: any, { email }: any) => {
 
      const user = await getRepository<User>(User)
      .findOne({email})

      if (user) {
        let recipe = await getRepository<Recipe>(Recipe)
          .create({
            ...input,
            id: v4(),
            user: user?.id
          });
        
        await getRepository(Recipe)
        .save(recipe);
        
        return recipe; 
        }
        
      throw new Error("Error Login");
        
    })
  },
  //set recipe
  Recipe: { 
    //find userid  
    user: async ( { user }: any , paramer:any) => {
      console.log(user)
      console.log(paramer)
    const propietary = await getRepository<User>(User)
      .findOne(user.id,
        { relations: ["recipes"] }
      )
      console.log(propietary)
    return propietary;
    }
  },
  
}; 
