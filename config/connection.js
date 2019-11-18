//set up code to connect node to MySQL
var express = require("express")
var mysql = require("mysql")
var keys = process.env.NODE_ENV === 'production' ? null : require("../keys")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: keys && keys.mysql.user || process.env.user,
    password: keys && keys.mysql.password || process.env.password,
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: keys.mysql.user,
    password: keys.mysql.password,
    database: "burgers_db"
  })
}

module.exports = connection