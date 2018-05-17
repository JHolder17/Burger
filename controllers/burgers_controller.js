var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
//route to get all burgers
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var brgsObject = {
            burgers: data
        };
        console.log(brgsObject);
        res.render("index", brgsObject);
    });
});
//route to insert new burger
router.post("/api/burgers", function(req,res){
    console.log(req.body);
    burger.insertOne(req.body.name, 1, function(result){
        res.status(200).end();
    });
});
//updates a single burger to eaten
router.put("/api/burgers/:id", function(req, res){
    burger.updateOne(req.params.id, 0,  function(result){
        res.json(result);
    });
});
module.exports = router;
