const connection = require('../database/connection')

module.exports = {

  async index(req, res) {

    const { page = 1 } = req.query;
    
    //buscanod o total de incidentes do banco de dados
    const [count] = await connection('incidents')
    .count()

    const incidents = await connection('incidents')
    .join('ongs', 'ong_id', '=', 'incidents.ong_id') //join com 'ongs', onde ong_id('ong') seja igual a ong_id('incidents')
    .limit(5)
    .offset((page - 1) * 5)
    .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.estado', 'ongs.uf'])

    //setando no header o total de incidentes
    res.header('X-Total-Count', count['count(*)'])

    return res.json( incidents )
  },
  
  async create(req, res) {
    const { title, description, value } = req.body

    const ong_id = req.headers.authorization

    //se fosse multilpos inserções
    //const [id] = pegaria o id do primeiro indice inserido
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization

    console.log({ong_id})

    const incident = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first();
    
    console.log({incident})

    if(incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operação não permitida' })
    }

    await connection('incidents').where('id', id).delete()
    
    //204 deu sucesso mas não tem conteudo para enviar
    return res.status(204).send()
  }
}