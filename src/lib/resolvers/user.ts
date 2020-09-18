//modules
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
//middleware
import { isAuthenticated } from './middleware'

//Stores 
import { UserStore } from '../store/userStore'
import { RecipeStore } from '../store/recipeStore';



module.exports = {  
  Query: {
    //return userfor id
    getMyRecipes: combineResolvers(isAuthenticated,
      async (_: any, __: any, { email }: any) => {
        let user = await UserStore.findUserByEmail(email)
        return user;
    }),
  },

  Mutation: { 
    //singUp 
    signUp: async (_: any, { input }: any) => {
      let newUser = await UserStore.createNewUser(input);
      return newUser;
    },
    //Login
    login: async (_: any, { input }: any) => {
    
      const { email, password } = input;
      try {
        //search user
        const user = await UserStore.findUserByEmail(email);

        if (!user) {
          throw new Error("User not found");
        };
        //Compare password
        const isPassword = await compare(password, user.password.toString());

        if (!isPassword) {
          throw new Error("Check data provides");
        };
        const secretToken = process.env.SECRET_TOKEN_KEY || "mySecret"
        //token assign
        const token = jwt.sign({ email: user.email }, secretToken, { expiresIn: 60 * 60 })

        return {
          token
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  },

  //Set user schema
  User: {
    //find all userRecipes for recipesID  
    recipes: async ({ id }: any) => {
      const recipes = await RecipeStore.findRecipeByPropietary(id)
      return recipes;
    } 
  }
}; 