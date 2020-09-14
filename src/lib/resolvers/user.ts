import  {recipesConstatns , users } from '../../constatns';
import { connect } from '../../database/utils/connect';
const UserEntity = require('../../database/entities/userEntity');

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
    signUp:async (_: any, { input }:any) => {
      const { name, email, password } = input;
      
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