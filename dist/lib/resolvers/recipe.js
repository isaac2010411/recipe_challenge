"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constatns_1 = require("../../constatns");
var uuid = require('uuid').uuid;
// RECIPE RESOLVERS  AND MUTATIONS
module.exports = {
    Query: {
        //return all recipes
        getRecipes: function () {
            return constatns_1.recipesConstatns;
        },
        //return recipeID
        getOneRecipe: function (_, _a) {
            var id = _a.id;
            return constatns_1.recipesConstatns.find(function (recipe) { return recipe.id === id; });
        }
    },
    Mutation: {
        createRecipe: function (_, _a) {
            var input = _a.input;
            var newRecipe = __assign(__assign({}, input), { id: uuid.v4(), user: {
                    id: input.user
                } });
            console.log(newRecipe);
            constatns_1.recipesConstatns.push(newRecipe);
            return newRecipe;
        }
    },
    //set recipe
    Recipe: {
        //find userid  
        user: function (parent) {
            return constatns_1.users.find(function (user) { return user.id === parent.user.id; });
        }
    },
};
