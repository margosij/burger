var express = require("express")
var router = express.Router()
var burgerSetup = require("../models/burger.js")

router.get("/", function(req, res){
    burgerSetup.selectAll(function(data){
        var object = {
            burgers: data
        }
        // console.log(object)
        res.render("index", {burgers: data}
        // function (err, html){console.log(err, "burgercontroller  line 13")}
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
    console.log(req.body, "rek that body")
})

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.name
    console.log(condition, "condition")

    burgerSetup.updateOne({
        devoured: req.body.devoured
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