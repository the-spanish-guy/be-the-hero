const request = require('supertest')
const app = require('../../src/app')

const connection = require('../../src/database/connection')

describe('',() => {
  beforeEach( async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll( async () => {
    await connection.destroy()
  })
  it('should be able to acreate a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    // .set('Authorization', 'id')
    .send({
      name: "APAD 2",
      email: "onf@apad.com",
      whatsapp: "9876543210", 
      estado: "São Paulo",
      uf: "SP"
    })

    console.log(response.body)

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})