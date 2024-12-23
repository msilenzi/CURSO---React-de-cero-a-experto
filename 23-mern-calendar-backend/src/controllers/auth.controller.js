const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
const { generateJwt } = require('../helpers/jwt')

async function signup(req, res = response) {
  const userWithSameEmail = await User.findOne({ email: req.body.email })
  if (userWithSameEmail) {
    return res
      .status(400)
      .json({ ok: false, msg: 'A user with this email already exists' })
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
      msg: 'An error occurred while creating the user',
    })
  }

  // TODO: Generar JWT
  const token = await generateJwt(newUser.id, newUser.name)

  return res.status(201).json({
    ok: true,
    payload: {
      id: newUser.id,
      name: newUser.name,
      token,
    },
  })
}

async function login(req, res = response) {
  const { email, password } = req.body

  try {
    const userWithSameEmail = await User.findOne({ email })
    if (!userWithSameEmail) {
      return res
        .status(400)
        .json({ ok: false, msg: 'No user exists with this email' })
    }

    const isValidPassword = bcrypt.compareSync(
      password,
      userWithSameEmail.password
    )
    if (!isValidPassword) {
      return res.status(400).json({ ok: false, msg: 'Incorrect password' })
    }

    // TODO: Generar JWT
    const token = await generateJwt(
      userWithSameEmail.id,
      userWithSameEmail.name
    )

    return res.json({
      ok: true,
      payload: {
        id: userWithSameEmail.id,
        name: userWithSameEmail.name,
        token,
      },
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'An error occurred while logging in',
    })
  }
}

async function refreshToken(req, res = response) {
  const token = await generateJwt(req.user.id, req.user.name)
  return res.status(200).json({
    ok: true,
    payload: {
      id: req.user.id,
      name: req.user.name,
      token,
    },
  })
}

module.exports = { signup, login, refreshToken }
