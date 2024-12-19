const { response } = require('express')
const jwt = require('jsonwebtoken')

function validateJwt(req, res = response, next) {
  const token = req.header('x-token')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'El token es obligatorio',
    })
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_SECRET)
    req.id = id
    req.name = name
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token inválido',
    })
  }

  next()
}

module.exports = { validateJwt }
