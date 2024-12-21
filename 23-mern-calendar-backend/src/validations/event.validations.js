const { body } = require('express-validator')
const { isDate } = require('./custom-validations/isDate')

const createValidation = [
  body('title', 'The title is required').trim().notEmpty(),
  body('start', 'The start date is required').custom(isDate),
  body('end', 'The end date is required').custom(isDate),
]

module.exports = { createValidation }
