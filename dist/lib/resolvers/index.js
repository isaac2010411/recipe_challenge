"use strict";
var GraphQLDatetime = require('graphql-iso-date');
var reipeResolver = require('./recipe');
var userResolver = require('./user');
var categoryResolver = require('./category');
var customScalarDate = {
    Date: GraphQLDatetime
};
module.exports = [
    reipeResolver,
    userResolver,
    categoryResolver,
    customScalarDate
];
