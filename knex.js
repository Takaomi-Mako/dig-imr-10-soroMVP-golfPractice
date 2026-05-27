const knex = require("knex");
const knexConfig = require("./knexfile");

const env = process.env.NODE_ENV;
console.log(env);

module.exports = knex(knexConfig[env]);
