const date = require('./types/date')
const dateTime = require('./types/dateTime')
const code = require('./types/code')
const uri = require('./types/uri')
const id = require('./types/id')

const resolvers = {
  date,
  dateTime,
  code,
  id,
  uri
}

module.exports = resolvers
