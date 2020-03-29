const crypto = require('crypto')

module.exports = function generateUniqueId() {
  //criando 4 bytes de caracteres aleatorios e convertendo- em string do tipo hexadecimal
  return crypto.randomBytes(4).toString('HEX') 
}