const express = require('express')
const routes = require('./routes')

const app = express() // iniciando o app

app.use(express.json()) //avisando ao express para que converta o tudo em json
app.use(routes)


app.listen(3333) //ouvindo a porta 3333