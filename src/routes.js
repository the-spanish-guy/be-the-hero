const express = require('express')
const crypto =require('crypto')
const connection = require('./database/connection')

const routes = express.Router()

//listando as ongs
routes.get('/ongs', async (req, res) => {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
})

//inserindo as ongs
routes.post('/ongs', async (req, res) => {
    const { nome:name, email, whatsapp, estado, uf } = req.body;
    // console.log(data)

    //criando 4 bytes de caracteres aleatorios e convertendo- em string do tipo hexadecimal
    const id = crypto.randomBytes(4).toString('HEX') 

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        estado,
        uf
    });

    return res.json({ id })
})

//exportando a variavel do arquivo
module.exports = routes;