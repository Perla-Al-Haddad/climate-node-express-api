const Pool = require('pg').Pool
require('dotenv').config();

const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST_NAME,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    require: true, 
    rejectUnauthorized: false 
  }
});

exports.pool = pool;