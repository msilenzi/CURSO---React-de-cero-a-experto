// /api/v1/auth

const router = require('express').Router()

const authController = require('./auth.controller')
const { signupValidation, loginValidation } = require('./auth.validations')
const validateFields = require('../common/middlewares/validateFields')

router.post('/signup', signupValidation, validateFields, authController.signup)

router.post('/login', loginValidation, validateFields, authController.login)

router.get('/refresh', authController.refreshToken)

module.exports = router
