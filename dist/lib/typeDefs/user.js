"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
module.exports = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  extend type Query {\n    user: User\n  }\n\n  input singUpInputUser {\n    name:String!\n    email:String!\n    password:String!\n  }\n\n  input loginInputUser {\n    email:String!\n    password:String!\n  }\n\n  extend type Mutation {\n    signUp(input : singUpInputUser!):User\n    login(input :loginInputUser!):Token\n  }\n\n  type Token {\n    token:String!\n  }\n\n  type User {\n    id:ID!\n    name:String!\n    email:String!\n    recipes:[Recipe!]\n    createdAt:Date!\n    updatedAt:Date!\n  }\n\n"], ["\n\n  extend type Query {\n    user: User\n  }\n\n  input singUpInputUser {\n    name:String!\n    email:String!\n    password:String!\n  }\n\n  input loginInputUser {\n    email:String!\n    password:String!\n  }\n\n  extend type Mutation {\n    signUp(input : singUpInputUser!):User\n    login(input :loginInputUser!):Token\n  }\n\n  type Token {\n    token:String!\n  }\n\n  type User {\n    id:ID!\n    name:String!\n    email:String!\n    recipes:[Recipe!]\n    createdAt:Date!\n    updatedAt:Date!\n  }\n\n"])));
var templateObject_1;
