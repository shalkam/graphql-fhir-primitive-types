const validatedType = require('../helpers/validatedType')

module.exports = validatedType({
  name: 'uri',
  description:
    'A Uniform Resource Identifier Reference (RFC 3986 ). Note: URIs are case sensitive. For UUID (urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7) use all lowercase',
  type: 'STRING',
  regex: /\S*/
})
