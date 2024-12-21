const { body } = require('express-validator')

const emailValidation = body('email', 'The email is required')
  .trim()
  .isEmail()
  .escape()

const signupValidation = [
  body('name', 'El nombre es obligatorio').trim().notEmpty().escape(),
  emailValidation,
  body(
    'password',
    'The password is required and must have at least 6 characters'
  )
    .trim()
    .isLength({ min: 6 }),
]

const loginValidation = [
  emailValidation,
  body('password', 'The password is required').trim().notEmpty(),
]

module.exports = { signupValidation, loginValidation }
