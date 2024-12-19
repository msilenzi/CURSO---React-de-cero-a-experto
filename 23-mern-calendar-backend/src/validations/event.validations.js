const { body } = require('express-validator')
const { isDate } = require('./custom-validations/isDate')

const createValidation = [
  body('title', 'El título es obligatorio').trim().notEmpty(),
  body('start', 'La fecha de inicio es obligatoria').custom(isDate),
  body('end', 'La fecha de fin es obligatoria').custom(isDate),
]

module.exports = { createValidation }
