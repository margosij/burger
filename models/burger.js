var orm = require("../config/orm.js")
//creat code that will call ORM functions using burger specific input for the ORM

var burgerSetup = {
    selectAll: function(cb){
        // console.log("select erythang")
        orm.selectAll("burgers", function(res){
            console.log(res, "res")
            cb(res)
        })
    },
    insertOne: function(cols, vals, cb){
        orm.inserOne("burgers", cols, vals, function(res){
            cb(res)
        })
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res)
        })
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
          cb(res);
        });
    }
}

module.exports = burgerSetup