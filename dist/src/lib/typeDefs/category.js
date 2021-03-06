"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
module.exports = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  extend type Query {\n    getCategories : [Category]\n    getOneCategory (id:ID):Category\n  }\n\n  input createCategoryInut {\n    name:String!\n  }\n  \n  extend type Mutation {\n    createCategory (input: createCategoryInut!): Category\n  }\n\n  type Category {\n    id:ID!\n    name:String!\n    recipes:[Recipe]\n  }\n"], ["\n\n  extend type Query {\n    getCategories : [Category]\n    getOneCategory (id:ID):Category\n  }\n\n  input createCategoryInut {\n    name:String!\n  }\n  \n  extend type Mutation {\n    createCategory (input: createCategoryInut!): Category\n  }\n\n  type Category {\n    id:ID!\n    name:String!\n    recipes:[Recipe]\n  }\n"])));
var templateObject_1;
