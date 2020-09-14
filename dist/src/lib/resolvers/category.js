"use strict";
var _a = require('./../../constatns'), recipesConstatns = _a.recipesConstatns, categories = _a.categories;
// CATEGORY RESOLVERS AND MUTATIONS
module.exports = {
    Query: {
        //return all recipes
        getCategories: function () {
            return categories;
        },
        //return recipeID
        getOneCategory: function (_, _a) {
            var id = _a.id;
            return categories.find(function (category) { return category.name === id; });
        }
    },
    Mutation: {},
    //set category recipes
    Category: {
        //find all recipes name  
        recipes: function (parent) {
            var recipes = recipesConstatns.filter(function (recipe) { return recipe.category.name === parent.name; });
            return recipes;
        }
    },
};
