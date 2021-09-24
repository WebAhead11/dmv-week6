const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

//when we want to work on local DB
//const connectionString = process.env.LOCAL_DB_URL;
//when we want to work on heroku DB
const connectionString = process.env.PRODUCTION_DB_URL;

// create a pool of available connections
// we can use this to query our database
const db = new pg.Pool({
  connectionString,
});

module.exports = db;
