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
exports.CategoryStore = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var categoryEntity_1 = require("../../entities/categoryEntity");
var recipeEntity_1 = require("../../entities/recipeEntity");
exports.CategoryStore = {
    findAllCategories: function () { return __awaiter(void 0, void 0, void 0, function () {
        var categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                        .find({ relations: ["recipes"] })];
                case 1:
                    categories = _a.sent();
                    return [2 /*return*/, categories];
            }
        });
    }); },
    findCategoryByName: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne(name, { relations: ["recipes"] })];
                case 1:
                    category = _a.sent();
                    return [2 /*return*/, category];
                case 2:
                    error_1 = _a.sent();
                    throw new Error("Categorycname not found ");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    //find by id
    findCategoryById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne(id, { relations: ["recipes"] })];
                case 1:
                    category = _a.sent();
                    return [2 /*return*/, category];
                case 2:
                    error_2 = _a.sent();
                    throw new Error("Category not found");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    //find by id
    findRecipesByCategory: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne(id, { relations: ["recipes"] })];
                case 1:
                    category = _a.sent();
                    return [2 /*return*/, category === null || category === void 0 ? void 0 : category.recipes];
                case 2:
                    error_3 = _a.sent();
                    throw new Error("Category not found");
                case 3: return [2 /*return*/];
            }
        });
    }); },
    //create new category
    createNewCategory: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var category, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne({ name: name })];
                case 1:
                    category = _a.sent();
                    if (!!category) return [3 /*break*/, 3];
                    category = new categoryEntity_1.Category();
                    category.id = uuid_1.v4();
                    category.name = name;
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .save(category)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, category];
                case 4:
                    error_4 = _a.sent();
                    throw new Error("Error in AddCategory");
                case 5: return [2 /*return*/];
            }
        });
    }); },
    //update Category name
    updateCategory: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var input, id, isCategory, isNameOk, isCat, isCategory_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = data.input, id = data.id;
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne({ id: id })];
                case 1:
                    isCategory = _a.sent();
                    if (!isCategory) {
                        throw new Error("Category not found");
                    }
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .findOne({ name: input.name })];
                case 2:
                    isNameOk = _a.sent();
                    if (isNameOk) {
                        throw new Error("Name category is already in use");
                    }
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .createQueryBuilder()
                            .update(categoryEntity_1.Category)
                            .where("id = :id", { id: id })
                            .set({
                            name: input.name
                        })
                            .execute()];
                case 3:
                    isCat = _a.sent();
                    if (!isCat.affected) return [3 /*break*/, 5];
                    return [4 /*yield*/, exports.CategoryStore.findCategoryById(id)];
                case 4:
                    isCategory_1 = _a.sent();
                    return [2 /*return*/, isCategory_1];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    deleteCategory: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var recipes, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                            .createQueryBuilder()
                            .delete()
                            .from(recipeEntity_1.Recipe)
                            .where("category.id = :id", { id: id })
                            .execute()];
                case 1:
                    recipes = _a.sent();
                    return [4 /*yield*/, typeorm_1.getRepository(categoryEntity_1.Category)
                            .delete({ id: id })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
                case 3:
                    error_5 = _a.sent();
                    throw new Error("Error to delete");
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
