"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
module.exports = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  extend type Query {\n    getRecipes:[Recipe!]\n    getOneRecipe(id:ID!):Recipe\n  }\n  \n  type Recipe {\n    id:ID! \n    name:String!\n    description:String!\n    ingredients:String!\n    category:String!\n    user:User! \n  } \n\n  extend type Mutation {\n    createRecipe (input: createRecipeInput!): Recipe\n  }\n\n  input createRecipeInput{\n    name:String\n    description:String\n    ingredients:String\n    category:String\n  }\n\n"], ["\n\n  extend type Query {\n    getRecipes:[Recipe!]\n    getOneRecipe(id:ID!):Recipe\n  }\n  \n  type Recipe {\n    id:ID! \n    name:String!\n    description:String!\n    ingredients:String!\n    category:String!\n    user:User! \n  } \n\n  extend type Mutation {\n    createRecipe (input: createRecipeInput!): Recipe\n  }\n\n  input createRecipeInput{\n    name:String\n    description:String\n    ingredients:String\n    category:String\n  }\n\n"])));
var templateObject_1;
