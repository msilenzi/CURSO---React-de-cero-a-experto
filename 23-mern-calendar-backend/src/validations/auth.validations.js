const { body } = require('express-validator')

const emailValidation = body('email', 'El email es obligatorio')
  .trim()
  .isEmail()
  .escape()

const signupValidation = [
  body('name', 'El nombre es obligatorio').trim().notEmpty().escape(),
  emailValidation,
  body(
    'password',
    'La contraseña es obligatoria y debe tener al menos 6 caracteres'
  )
    .trim()
    .isLength({ min: 6 }),
]

const loginValidation = [
  emailValidation,
  body('password', 'La contraseña es obligatoria').trim().notEmpty(),
]

module.exports = { signupValidation, loginValidation }
