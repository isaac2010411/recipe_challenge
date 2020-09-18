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
exports.RecipeStore = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var recipeEntity_1 = require("../../entities/recipeEntity");
var categoryStore_1 = require("./categoryStore");
exports.RecipeStore = {
    findAllRecipes: function () { return __awaiter(void 0, void 0, void 0, function () {
        var recipes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .find({ relations: ["user", "category"] })];
                case 1:
                    recipes = _a.sent();
                    return [2 /*return*/, recipes];
                case 2:
                    error_1 = _a.sent();
                    throw new Error("not found");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    findRecipeByPropietary: function (user) { return __awaiter(void 0, void 0, void 0, function () {
        var recipes, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .find({ user: user })];
                case 1:
                    recipes = _a.sent();
                    return [2 /*return*/, recipes];
                case 2:
                    error_2 = _a.sent();
                    throw new Error("error to delete");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    findRecipeById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var recipe, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .findOne({ id: id }, { relations: ["user", "category"] })];
                case 1:
                    recipe = _a.sent();
                    return [2 /*return*/, recipe];
                case 2:
                    error_3 = _a.sent();
                    throw new Error("User not found , incorrected id");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteRecipe: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var recipe, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)];
                case 1:
                    recipe = _a.sent();
                    recipe.delete(id);
                    return [2 /*return*/, true];
                case 2:
                    error_4 = _a.sent();
                    throw new Error("error to delete");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    createNewRecipe: function (category, data, user) { return __awaiter(void 0, void 0, void 0, function () {
        var newrecipe, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(user);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .create(__assign(__assign({ id: uuid_1.v4() }, data), { category: category, user: user === null || user === void 0 ? void 0 : user.id }))];
                case 1:
                    newrecipe = _a.sent();
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .save(newrecipe)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    updateRecipe: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var input, id, recipe, isCategory, newRecipe, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = data.input, id = data.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, exports.RecipeStore.findRecipeById(id)];
                case 2:
                    recipe = _a.sent();
                    isCategory = void 0;
                    if (!(input.category !== (recipe === null || recipe === void 0 ? void 0 : recipe.category.name))) return [3 /*break*/, 4];
                    return [4 /*yield*/, categoryStore_1.CategoryStore.createNewCategory(input.category)
                        //update category..|| create newCategory
                    ];
                case 3:
                    isCategory = _a.sent();
                    _a.label = 4;
                case 4: 
                //Edit recipe
                return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                        .createQueryBuilder()
                        .where("recipe.id = :id", { id: id })
                        .update(recipeEntity_1.Recipe)
                        .set({
                        name: input.name,
                        ingredients: input.ingredients,
                        description: input.description,
                        category: isCategory
                    })
                        .execute()];
                case 5:
                    //Edit recipe
                    _a.sent();
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .findOne({ id: id }, { relations: ["category"] })];
                case 6:
                    newRecipe = _a.sent();
                    return [2 /*return*/, newRecipe];
                case 7:
                    error_5 = _a.sent();
                    throw new Error("Error to add Category");
                case 8: return [2 /*return*/];
            }
        });
    }); }
};
