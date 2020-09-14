"use strict";
var reipeResolver = require('./recipe');
var userResolver = require('./user');
var categoryResolver = require('./category');
module.exports = [
    reipeResolver,
    userResolver,
    categoryResolver
];
