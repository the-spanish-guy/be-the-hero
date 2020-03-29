const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { errors } = require('celebrate')

const app = express() // iniciando o app

app.use(cors())
app.use(express.json()) //avisando ao express para que converta o tudo em json
app.use(routes)
app.use(errors())

app.listen(3333) //ouvindo a porta 3333