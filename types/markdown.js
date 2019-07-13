const validatedType = require('../helpers/validatedType')

module.exports = validatedType({
  name: 'markdown',
  description:
    'A FHIR string (see above) that may contain markdown syntax for optional processing by a markdown presentation engine, in the GFM extension of CommonMark format',
  type: 'STRING',
  regex: /\s*(\S|\s)*/
})
