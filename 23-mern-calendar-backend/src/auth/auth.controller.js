const { response } = require('express')
const { validationResult } = require('express-validator')

function signup(req, res = response) {
  const { name, email, password } = req.body
  return res.status(201).json({ ok: true, action: 'signup', payload: req.body })
}

function login(req, res = response) {
  const { email, password } = req.body
  return res.json({ ok: true, action: 'login', payload: req.body })
}

function refreshToken(req, res = response) {
  return res.json({ ok: true, action: 'refresh JWT token' })
}

module.exports = { signup, login, refreshToken }
