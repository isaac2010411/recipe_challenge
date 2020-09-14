"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
var typeorm_1 = require("typeorm");
var categoryEntity_1 = require("./categoryEntity");
var userEntity_1 = require("./userEntity");
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Number)
    ], Recipe.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Recipe.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Recipe.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Recipe.prototype, "ingredients", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return categoryEntity_1.Category; }, function (category) { return category.name; }, {
            eager: true,
            cascade: true
        }),
        __metadata("design:type", categoryEntity_1.Category)
    ], Recipe.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return userEntity_1.User; }, function (user) { return user.recipes; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", userEntity_1.User)
    ], Recipe.prototype, "user", void 0);
    Recipe = __decorate([
        typeorm_1.Entity()
    ], Recipe);
    return Recipe;
}());
exports.Recipe = Recipe;
