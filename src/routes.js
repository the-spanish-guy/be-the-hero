const express = require('express')

const routes = express.Router()

//criando uma nova rota para o app
routes.get('/', (req, res) => {
    return res.json({
        teste: 'Hola Mundo'
    })
})

//exportando a variavel do arquivo
module.exports = routes;