var express = require("express")
var router = express.Router()
var burgerSetup = require("../models/burger.js")

router.get("/", function(req, res){
    burgerSetup.selectAll(function(data){
        var object = {
            burgers: data
        }
        res.render("index", {burgers: data}
        )
    })
})

router.post("/burgers/create", function(req, res){
    burgerSetup.insertOne([
        "burger_name"
    ], [
        req.body.name
    ], function(result){
        res.json({ id: result.insertID})
    }
    )

})

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id
    //need to switch devoured to console 1 instad of false
    burgerSetup.updateOne({
        devoured: 1
    }, condition, function(result) {
        if (result.changedRows == 0){
            return res.status(404).end()
        } else{
            res.status(200).end()
        }
    })
})

// router.delete("/", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     burger.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = router