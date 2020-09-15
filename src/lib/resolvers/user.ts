import { getRepository } from  'typeorm'
import { User } from '../../entities/userEntity';
import { compare , hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {combineResolvers} from 'graphql-resolvers';
import {isAuthenticated} from './middleware'
import { Recipe } from '../../entities/recipeEntity';
module.exports = {  
  Query: {
    //return userfor id
    user: combineResolvers(isAuthenticated,
      async (_: any, __: any, { email }: any) => {
        try {
          const user = await getRepository<User>(User)
          .createQueryBuilder("user")
          .where("user.email = :email", { email: email })
          .getOne();
          if (!user) {
            throw new Error("User not found"); 
          }
          return user;
        } catch (error) {
          console.log(error)
          throw error;
        }
    }),
  },

  Mutation: { 
    signUp: async (_: any, { input }: any) => {
      
      const { name, email, password } = input;

      try {

        const user = await getRepository<User>(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();
    
        if (user) {
          console.log(user)
          throw new Error("Email already in use");
        }

        let saltNumber = 10;
        let newUser = {
          name,
          email,
          password: hashSync( password , saltNumber )
        }

        getRepository<User>(User).create(newUser)
        await getRepository(User).save(newUser)
        return newUser;

      } catch (error) {
        console.log(error)
      }
      
    },
    login: async (_: any, { input }: any) => {
      const { email, password } = input;

      try {
        //search user
        const user = await getRepository<User>(User)
          .createQueryBuilder("user")
          .where("user.email = :email", { email: email })
          .getOne()
         
        if (!user) {
          throw new Error("user not found");
        };
        //Compare password
        const isPassword =await compare(password, user.password.toString());

        if (!isPassword) {
          throw new Error("check data provider");
        };
        const secretToken = process.env.SECRET_TOKEN_KEY || "mySecret"
        //token assign
        const token = jwt.sign({ email: user.email }, secretToken , {expiresIn: 60 * 60})

        return {
          token
        }
      } catch (error) {
        

      }
    }
  },

  //Set user schema
  User: {
    //find all userRecipes for recipesID  
    recipes: async ({ id }: any) => {
      const recipes = await getRepository<Recipe>(Recipe)
      .createQueryBuilder("recipe")
      .where("recipe.user = :user", { user: id })
      .getMany()
      
      return recipes;
    } 
  }
}; 