const uniqueId = require('../../src/util/generateUniqueId')

describe('test for id generates', () => {

  it('should generate an unique ID', done => {
    const res = uniqueId()

    expect(res).toHaveLength(8)
    done()
  })

})