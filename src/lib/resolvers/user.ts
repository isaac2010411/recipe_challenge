import  {recipesConstatns , users } from '../../constatns';
import { getRepository } from  'typeorm'
import { User } from '../../entities/userEntity';
import { hashSync } from 'bcryptjs'
module.exports = {
  
  Query: {
    //return all users
    users: () => users, 

    //return userfor id
    user: ( _:any , { id }:any ) => {
        return users.find((user:any) => user.id === id)
    },
  },

  Mutation: { 
    signUp: async (_: any, { input }: any) => {
      
      const { name, email, password } = input;

      const user = await getRepository<User>(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: email })
        .getOne();
    
      if (user) {
        console.log(user)
        // throw new Error("Email already in use");
        return user
      }

      let newUser = {
        name,
        email,
        password: hashSync( password , 10)
      }

      getRepository<User>(User).create(newUser)
      await getRepository(User).save(newUser)
      return newUser
    }
  },

  //Set user schema
  User: {
    //find all userRecipes for recipesID  
    recipes: ({ id }:any) => recipesConstatns.filter((recipe:any) => {
      return recipe.user.id === id;
    })
  }
}; 