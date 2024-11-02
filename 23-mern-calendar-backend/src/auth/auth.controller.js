const { response } = require('express')

function signup(req, res = response) {
  return res.json({ ok: true, action: 'signup' })
}

function login(req, res = response) {
  return res.json({ ok: true, action: 'login' })
}

function refreshToken(req, res = response) {
  return res.json({ ok: true, action: 'refresh JWT token' })
}

module.exports = { signup, login, refreshToken }
