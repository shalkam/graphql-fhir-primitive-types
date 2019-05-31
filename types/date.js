const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')
const JustDate = require('just-date')

module.exports = new GraphQLScalarType({
  name: 'date',
  description:
    'A date, or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, or YYYY-MM-DD, e.g. 2018, 1973-06, or 1905-08-23. There SHALL be no time zone. Dates SHALL be valid dates',
  serialize: value => {
    const localDate = new Date(value)
    const date = new JustDate(localDate)
    return date.toString()
  },
  parseValue: value => {
    const localDate = new Date(value)
    const date = new JustDate(localDate)
    return date.toFormattedString()
  },
  parseLiteral: ast => {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        'Query error: Can only parse strings got a: ' + ast.kind,
        [ast]
      )
    }
    var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    if (!regex.test(ast.value)) {
      throw new GraphQLError(
        `Query error: Not a valid date, format 'YYYY-MM-DD' is required`,
        [ast]
      )
    }
    const date = new Date(ast.value)
    return date
  }
})
