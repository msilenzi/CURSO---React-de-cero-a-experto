const jwt = require('jsonwebtoken')

function generateJwt(id, name) {
  return new Promise((resolve, reject) => {
    const payload = { id, name }
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) reject('An issue occurred while generating the token')
        resolve(token)
      }
    )
  })
}

module.exports = {
  generateJwt,
}
