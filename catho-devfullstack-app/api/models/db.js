const mysql = require('mysql2/promise');
const dbConfig = require("../../config/db.config.js");

async function query(sql, params) {
    const connection = await mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
      });
      
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}

/*
// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
*/