const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

//when we want to work on local DB
// const connectionString = process.env.LOCAL_DB_URL;
const connectionString = process.env.DB_URL;

// create a pool of available connections
// we can use this to query our database
// const db = new pg.Pool({
//   connectionString,
// });

const isProd = connectionString.includes("amazonaws.com");

const db = new pg.Pool({
  connectionString,
  ...(isProd && { ssl: { rejectUnauthorized: true } }),
});

module.exports = db;
