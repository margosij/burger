var express = require("express")
var router = express.Router()
var burgerSetup = require("../models/burger.js")

router.get("/", function(req, res){
    console.log("balls are here on router")
    console.log(burgerSetup)
    burgerSetup.selectAll(function(data){
        console.log(data, "data")
        var object = {
            burgers: data
        }
        console.log(object)
        res.render("index", {burgers: data}, function (err, html){console.log(err, "burgercontroller  line 14")})
    })
    // res.send("Hello World")
})

// router.post("/", function(req, res){
//     console.log("i need help with posting")
//     burger.insertOne([
//         "burger_name"
//     ], [
//         req.body.burger_name
//     ], function(result){
//         res.json({ id: result.insertID})
//     }

//     )
// })

// router.put("/", function(req, res){
//     var condition = "id = " + req.params.id

//     console.log("condition", condition)

//     burger.updateOne({
//         devoured: req.body.devoured
//     }, condition, function(result) {
//         if (result.changedRows == 0){
//             return res.status(404).end()
//         } else{
//             res.status(200).end()
//         }
//     })
// })

// router.delete("/", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = router