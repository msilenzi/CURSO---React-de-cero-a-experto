const { response } = require('express')
const jwt = require('jsonwebtoken')

function validateJwt(req, res = response, next) {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'The token is required',
    })
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { id, name }
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token',
    })
  }

  next()
}

module.exports = { validateJwt }
