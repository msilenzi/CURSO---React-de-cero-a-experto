const jwt = require('jsonwebtoken')

function generateJwt(id, name) {
  return new Promise((resolve, reject) => {
    const payload = { id, name }
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) reject('Ocurrió un problema al generar el token')
        resolve(token)
      }
    )
  })
}

module.exports = {
  generateJwt,
}
