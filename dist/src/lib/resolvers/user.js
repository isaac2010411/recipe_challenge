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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var bcryptjs_1 = require("bcryptjs");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var graphql_resolvers_1 = require("graphql-resolvers");
var middleware_1 = require("./middleware");
//entities
var userEntity_1 = require("../../entities/userEntity");
var recipeEntity_1 = require("../../entities/recipeEntity");
module.exports = {
    Query: {
        //return userfor id
        user: graphql_resolvers_1.combineResolvers(middleware_1.isAuthenticated, function (_, __, _a) {
            var email = _a.email;
            return __awaiter(void 0, void 0, void 0, function () {
                var user, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, typeorm_1.getRepository(userEntity_1.User)
                                    .findOne({ email: email })];
                        case 1:
                            user = _b.sent();
                            if (!user) {
                                throw new Error("User not found");
                            }
                            return [2 /*return*/, user];
                        case 2:
                            error_1 = _b.sent();
                            console.log(error_1);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }),
    },
    Mutation: {
        signUp: function (_, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var name, email, password, user, saltNumber, newUser, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            name = input.name, email = input.email, password = input.password;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, typeorm_1.getRepository(userEntity_1.User)
                                    .findOne({ email: email })];
                        case 2:
                            user = _b.sent();
                            if (user) {
                                console.log(user);
                                throw new Error("Email already in use");
                            }
                            saltNumber = 10;
                            newUser = {
                                name: name,
                                email: email,
                                password: bcryptjs_1.hashSync(password, saltNumber)
                            };
                            typeorm_1.getRepository(userEntity_1.User).create(newUser);
                            return [4 /*yield*/, typeorm_1.getRepository(userEntity_1.User).save(newUser)];
                        case 3:
                            _b.sent();
                            return [2 /*return*/, newUser];
                        case 4:
                            error_2 = _b.sent();
                            console.log(error_2);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        },
        login: function (_, _a) {
            var input = _a.input;
            return __awaiter(void 0, void 0, void 0, function () {
                var email, password, user, isPassword, secretToken, token, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = input.email, password = input.password;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, typeorm_1.getRepository(userEntity_1.User)
                                    .findOne({ email: email })];
                        case 2:
                            user = _b.sent();
                            if (!user) {
                                throw new Error("user not found");
                            }
                            ;
                            return [4 /*yield*/, bcryptjs_1.compare(password, user.password.toString())];
                        case 3:
                            isPassword = _b.sent();
                            if (!isPassword) {
                                throw new Error("check data provider");
                            }
                            ;
                            secretToken = process.env.SECRET_TOKEN_KEY || "mySecret";
                            token = jsonwebtoken_1.default.sign({ email: user.email }, secretToken, { expiresIn: 60 * 60 });
                            return [2 /*return*/, {
                                    token: token
                                }];
                        case 4:
                            error_3 = _b.sent();
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
    },
    //Set user schema
    User: {
        //find all userRecipes for recipesID  
        recipes: function (_a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () {
                var recipes;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, typeorm_1.getRepository(recipeEntity_1.Recipe)
                                .find({ user: id })];
                        case 1:
                            recipes = _b.sent();
                            return [2 /*return*/, recipes];
                    }
                });
            });
        }
    }
};
