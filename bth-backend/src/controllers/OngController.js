const crypto =require('crypto')
const connection = require('../database/connection')

module.exports = {

  async index (req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create (req, res) {
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
  }
};