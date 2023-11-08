const { Pool } = require("pg");
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://ipxwaypk:SK_LDm2GtzQj7IB1kUaWtX7DEmJFfBBv@rain.db.elephantsql.com/ipxwaypk"; // Make sure this is your actual URL

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
