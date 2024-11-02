// /api/v1/auth

const router = require('express').Router()

const authController = require('./auth.controller')

router.post('/signup', authController.signup)

router.post('/login', authController.login)

router.get('/refresh', authController.refreshToken)

module.exports = router
