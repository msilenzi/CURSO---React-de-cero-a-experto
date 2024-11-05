// /api/v1/auth

const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const {
  signupValidation,
  loginValidation,
} = require('../validations/auth.validations')
const validateFields = require('../middlewares/validateFields.middleware')
const { validateJwt } = require('../middlewares/validateJwt.middleware')

router.post('/signup', signupValidation, validateFields, authController.signup)

router.post('/login', loginValidation, validateFields, authController.login)

router.get('/refresh', validateJwt, authController.refreshToken)

module.exports = router
