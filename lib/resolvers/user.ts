import { recipesConstatns, users } from '../../constatns';
const uuid = require('uuid');




module.exports = {
  Query: {
    //return all users
    users: () => users,

    //return userfor id
    user: ( _ , { id } ) => {
        return users.find(user => user.id === id)
    },
  },

  //Set user schema
  User: {
    //find all userRecipes for recipesID  
    recipes: ({ id }) => recipesConstatns.filter(recipe => {
      return recipe.user.id === id;
    })
  }
}; 