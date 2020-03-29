const connection = require('../database/connection')
const generateUniqueId = require('../util/generateUniqueId')

module.exports = {

  async index (req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create (req, res) {
    const { name, email, whatsapp, estado, uf } = req.body;
    // console.log(data)

    const id = generateUniqueId()

    console.log(id)
  
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