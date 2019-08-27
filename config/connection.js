// Set up MySQL connection.
var mysql = require("mysql");


var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    port: 3306,
    password: "password",
    database: 'burger_db'
  })
};

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

// Export connection for our ORM to use.
module.exports = connection;