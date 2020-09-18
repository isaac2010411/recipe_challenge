"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_resolvers_1 = require("graphql-resolvers");
var middleware_1 = require("./middleware");
var recipeStore_1 = require("../store/recipeStore");
var categoryStore_1 = require("../store/categoryStore");
var userStore_1 = require("../store/userStore");
// RECIPE RESOLVERS  AND MUTATIONS
module.exports = {
    Query: {
        //return all recipes
        getRecipes: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, recipeStore_1.RecipeStore.findAllRecipes()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }),
        //return recipeID
        getOneRecipe: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, recipeStore_1.RecipeStore.findRecipeById(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        })
    },
    Mutation: {
        //if user ownerRecipe ..delete recipe 
        deleteRecipe: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, middleware_1.isOwnerRecipe, function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, recipeStore_1.RecipeStore.deleteRecipe(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        }),
        //if user ownerRecipe ..update recipe 
        updateRecipe: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, middleware_1.isOwnerRecipe, function (_, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, recipeStore_1.RecipeStore.updateRecipe(data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); }),
        createRecipe: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, function (_, _a, _b) {
            var input = _a.input;
            var email = _b.email;
            return __awaiter(void 0, void 0, void 0, function () {
                var category, user, newRecipe, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, categoryStore_1.CategoryStore.findCategoryByName(input.category)];
                        case 1:
                            category = _c.sent();
                            return [4 /*yield*/, userStore_1.UserStore.findUserByEmail(email)];
                        case 2:
                            user = _c.sent();
                            if (!user) return [3 /*break*/, 4];
                            if (!!category) return [3 /*break*/, 4];
                            return [4 /*yield*/, categoryStore_1.CategoryStore.createNewCategory(input.category)];
                        case 3:
                            category = _c.sent();
                            _c.label = 4;
                        case 4: return [4 /*yield*/, recipeStore_1.RecipeStore.createNewRecipe(category, input, user)];
                        case 5:
                            newRecipe = _c.sent();
                            return [2 /*return*/, newRecipe];
                        case 6:
                            error_1 = _c.sent();
                            throw new Error("Error to create recipe");
                        case 7: return [2 /*return*/];
                    }
                });
            });
        })
    },
    //set recipe
    Recipe: {
        //find userid  
        user: function (_a) {
            var user = _a.user;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, userStore_1.UserStore.findUserById(user.id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
        category: function (_a) {
            var category = _a.category;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, categoryStore_1.CategoryStore.findCategoryById(category.id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        }
    },
};
