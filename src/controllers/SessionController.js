const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { id } = req.body

    //se fosse multilpos inserções
    //const [id] = pegaria o id do primeiro indice inserido
    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if(!ong) {
      return res.status(400).json({ error: 'Nenhuma ONG encontrada pra esse id' })
    }

    return res.json(ong)
  }
}