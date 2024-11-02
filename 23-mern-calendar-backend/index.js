const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Directorio público
//   `use()` permite definir un middleware. Un middleware es una función que
//   se ejecuta cada vez que alguien hace una petición.
app.use(express.static('public'))

// Rutas
// app.get('/', (req, res) => {
//   console.log('GET /')
//   return res.json({
//     ok: true,
//   })
// })

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
