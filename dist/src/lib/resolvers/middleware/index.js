"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
var graphql_resolvers_1 = require("graphql-resolvers");
exports.isAuthenticated = function (_, __, _a) {
    var email = _a.email;
    if (!email) {
        throw new Error("Login to contiued");
    }
    return graphql_resolvers_1.skip;
};
