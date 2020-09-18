
const GraphQLDatetime = require('graphql-iso-date')
const reipeResolver = require('./recipe')
const userResolver = require('./user')
const categoryResolver = require('./category')

const customScalarDate = {
  Date:GraphQLDatetime
}

module.exports =[
  reipeResolver,
  userResolver,
  categoryResolver,
  customScalarDate
]
