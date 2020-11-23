const mysql = require('mysql2')
const dbConfig = require('../config/db.config.js')

require('dotenv').config()

// var connection = mysql.createPool({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB,
// });

const dbh = mysql.createConnection({
  host: process.env.DBHOST,
  port: 3306,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBUSER,
})

module.exports = dbh
// export default dbh
