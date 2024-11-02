const mongoose = require('mongoose')

async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('DB online')
  } catch (error) {
    console.log(error)
    throw new Error('Error al inicializar la base de datos')
  }
}

module.exports = {
  dbConnection,
}
