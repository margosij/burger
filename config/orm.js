var connection = require("./connection.js")


function printQuestionMarks(num){
    var arr = []

    for (var i=0; i<num; i++){
        arr.push("?")
    }
    return arr.toString()
}

function objToSql(ob){
    var arr = []

    if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >=0){
            value = "'" + value + "'"
        }
        arr.push(key + "=" + value)
    }
    return arr.toString()
}

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        // console.log(tableInput, "table")
        // console.log(queryString, "query")
        connection.query(queryString, function(err, result){
            // console.log(connection, "connection")
            if (err){
                throw err
            }
            cb(result)
        })
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table

        queryString += " ("
        queryString += cols.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length)
        queryString += ") "

        console.log(cols, "added")

        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err
            }
            cb(result)
        })
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table

        queryString += " SET "
        queryString += objToSql(objColVals)
        queryString += " WHERE "
        queryString += condition

        console.log(queryString, "updated")
        connection.query(queryString, function(err, result){
            if (err){
                throw err
            }
            cb(result)
        })
    },
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}


module.exports = orm