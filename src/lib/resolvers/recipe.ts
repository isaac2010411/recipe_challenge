import { getRepository } from 'typeorm';
import {combineResolvers} from 'graphql-resolvers';
import {isAuthenticated} from './middleware'
import { User } from '../../entities/userEntity';
import  { v4 } from 'uuid'
import { Recipe } from '../../entities/recipeEntity';
import { Category } from '../../entities/categoryEntity';


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
      combineResolvers(isAuthenticated,
        
        async (_: any, { input }: any, { email }: any) => {
        
        //search category  name
          let category = await getRepository<Category>(Category)
            .findOne({ name: input.category });
            
        //search user
          const user = await getRepository<User>(User)
            .findOne({ email });
          console.log(user)

        if (user) {

          if (!category) {
            //create new  category
            category = new Category()
            category.id = v4()
            category.name = input.category
            await getRepository<Category>(Category)
            .save(category)
          }
          
    
          let newrecipe = await getRepository<Recipe>(Recipe)
            .create({
            id: v4(),
            ...input,
            category,
            user: user?.id
          }); 
        

          const result = await getRepository(Recipe)
          .save(newrecipe);

        return result; 
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
