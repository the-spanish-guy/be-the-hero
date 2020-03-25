const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

//listando as ongs
routes.get('/ongs', OngController.index)

//inserindo as ongs
routes.post('/ongs', OngController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)
//exportando a variavel do arquivo
module.exports = routes;