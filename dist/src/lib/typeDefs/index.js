"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var userTypeDef = require('./user');
var recipeTypeDef = require('./recipe');
var categoryTypeDef = require('./category');
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    _:String\n  },\n  type Mutation{\n    _:String\n  }\n"], ["\n  type Query {\n    _:String\n  },\n  type Mutation{\n    _:String\n  }\n"])));
module.exports = [
    typeDefs,
    userTypeDef,
    recipeTypeDef,
    categoryTypeDef
];
var templateObject_1;
