const express = require('express')
const { dbConnection } = require('./src/db/db.config')
require('dotenv').config()

// Crear el servidor de express
const app = express()

dbConnection()

//
// Middlewares

// Directorio público
//   `use()` permite definir un middleware. Un middleware es una función que
//   se ejecuta cada vez que alguien hace una petición.
app.use(express.static('public'))

// Leer y parsear body en formato json
app.use(express.json())

//
// Rutas
app.use('/api/v1/auth', require('./src/auth/auth.routes'))

//
// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
