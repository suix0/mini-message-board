const { Pool } = require("pg");

module.exports = new Pool({
  hostname: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.DATABASE_PORT,
  ssl: {
    require: true,
  },
});
