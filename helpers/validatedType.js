const { GraphQLScalarType } = require('graphql')
const { GraphQLError } = require('graphql/error')
const { Kind } = require('graphql/language')

module.exports = ({ name, type, min, max, regex }) => {
  return new GraphQLScalarType({
    name: name,
    serialize: value => {
      return value
    },
    parseValue: value => {
      return value
    },
    parseLiteral: ast => {
      if (ast.kind !== Kind[type]) {
        throw new GraphQLError(
          'Query error: Can only parse strings got a: ' + ast.kind,
          [ast]
        )
      }
      if (ast.value.length < min) {
        throw new GraphQLError(
          `Query error: minimum length of ${min} required: `,
          [ast]
        )
      }
      if (ast.value.length > max) {
        throw new GraphQLError(
          `Query error: maximum length is ${max}: `,
          [ast]
        )
      }
      if (regex !== null) {
        if (!regex.test(ast.value)) {
          throw new GraphQLError(`Query error: Not a valid ${name}: `, [
            ast
          ])
        }
      }
      return ast.value
    }
  })
}
