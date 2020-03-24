const express = require('express')

const app = express() // iniciando o app

app.use(express.json()) //avisando ao express para que converta o tudo em json

//criando uma nova rota para o app
app.get('/', (req, res) => {
    return res.json({
        teste: 'Hola Mundo'
    })
})

app.listen(3333) //ouvindo a porta 3333