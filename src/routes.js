const express = require('express')

const OngController = require('./controllers/OngController')

const routes = express.Router()

//listando as ongs
routes.get('/ongs', OngController.index)

//inserindo as ongs
routes.post('/ongs', OngController.create)

//exportando a variavel do arquivo
module.exports = routes;