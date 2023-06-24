const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '_Jinan022',
    database: 'thundercats_db',
  });

module.exports = dbPool.promise()