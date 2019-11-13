//set up code to connect node to MySQL
var express = require("express")
var mysql = require("mysql")
var keys = require("../keys")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
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

module.exports = connection