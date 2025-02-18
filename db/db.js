const { Pool } = require("pg");

module.exports = new Pool({
  hostname: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
});
