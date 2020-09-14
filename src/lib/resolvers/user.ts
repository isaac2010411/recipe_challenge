import  {recipesConstatns , users } from '../../constatns';
import { getRepository } from  'typeorm'
import { User } from '../../entities/userEntity';
import { compare , hashSync } from 'bcryptjs'
import jwt from 'jsonwebtoken';


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
    recipes: ({ id }:any) => recipesConstatns.filter((recipe:any) => {
      return recipe.user.id === id;
    })
  }
}; 