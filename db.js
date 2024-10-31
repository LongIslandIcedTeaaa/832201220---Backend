const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'contacts_db'
});

module.exports = pool.promise();
