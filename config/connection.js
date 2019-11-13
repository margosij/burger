//set up code to connect node to MySQL
var express = require("express")
var mysql = require("mysql")
var keys = require("./keys.js")

var app = express()

var PORT = process.env.PORT || 8080

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: keys.mysql.user,
    password: keys.mysql.password,
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

module.exports = connection