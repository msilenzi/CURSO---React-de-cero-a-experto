const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

async function signup(req, res = response) {
  const userWithSameEmail = await User.findOne({ email: req.body.email })
  if (userWithSameEmail) {
    return res
      .status(400)
      .json({ ok: false, msg: 'Ya existe un usuario con ese correo' })
  }

  const newUser = new User(req.body)

  // 1. Generar un salt
  //    Salt es un número aleatorio usado para hacer que la encriptación sea
  //    de una sola vía.
  const salt = bcrypt.genSaltSync()

  // 2. Generar la contraseña encriptada
  //    Se pasa la contraseña y el salt para generar la contraseña
  newUser.password = bcrypt.hashSync(req.body.password, salt)

  try {
    await newUser.save()
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Ocurrió un error al crear el usuario',
    })
  }

  return res.status(201).json({
    ok: true,
    payload: {
      id: newUser.id,
      name: newUser.name,
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
