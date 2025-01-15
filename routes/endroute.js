const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.query)

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Endroute</title>
        </head>
        <body>
            <h1>Ruta Final</h1>
            <h2>Bienvenido a la Ruta final</h2>
        </body>
        </html>
        `)
})

module.exports = router;