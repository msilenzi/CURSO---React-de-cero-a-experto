const jwt = require('jsonwebtoken')

function generateJwt(uid, name) {
  return new Promise((resolve, reject) => {
    const payload = { uid, name }
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
