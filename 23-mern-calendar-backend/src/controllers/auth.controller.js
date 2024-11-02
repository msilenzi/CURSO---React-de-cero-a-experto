const { response } = require('express')
const User = require('../models/user.model')

async function signup(req, res = response) {
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res
      .status(400)
      .json({ ok: false, msg: 'Ya existe un usuario con ese correo' })
  }

  try {
    user = new User(req.body)
    await user.save()
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Ocurrió un error al crear el usuario',
    })
  }

  return res.status(201).json({
    ok: true,
    payload: {
      id: user.id,
      name: user.name,
    },
  })
}

function login(req, res = response) {
  const { email, password } = req.body
  return res.json({ ok: true, action: 'login', payload: req.body })
}

function refreshToken(req, res = response) {
  return res.json({ ok: true, action: 'refresh JWT token' })
}

module.exports = { signup, login, refreshToken }
