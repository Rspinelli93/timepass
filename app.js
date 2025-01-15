//Todo lo requerido

const express = require('express')
const app = express()

const horaMiddleware = require('./middlewares/horaMiddleware')
const  validarHora = require('./middlewares/validarHora')

const indexRouter = require('./routes/index')
const endrouteRouter = require('./routes/endroute')


// Rutas:   // Que es esto????
app.use(horaMiddleware)
app.use('/', indexRouter)
app.use('/endroute', validarHora)
app.use('/endroute', endrouteRouter)

// Listen:

app.listen(3000, () => {
    console.log('El servidor esta ecuchando en el puerto http://localhost:3000')
}
)