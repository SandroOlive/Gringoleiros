const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

//var database_connection_status = "";

connection.connect((err) => {
  if (err) {
    throw err;
    database_connection_status =
      '<h3 class="text-center text-danger">MySQL Database Connection Error</h3>';
  }
  console.log("MySQL Connected");
  database_connection_status =
    '<h3 class="text-center text-success">Node JS Application Successfully connect to MySQL Database</h3>';
});
//console.log(connection);

module.exports = connection;
//module.exports = database_connection_status;
