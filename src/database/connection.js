const knex = require('knex');
const configuration = require('../../knexfile');

//passando como parametro a conexo de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;