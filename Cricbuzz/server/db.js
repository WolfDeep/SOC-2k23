const Pool = require("pg").Pool

const pool = new Pool({
  user: "Postgres",
  password: "7424",
  host : "localhost",
  port: 5432,
  database: "cric"
});

module.exports = pool;
