"use strict";
exports.__esModule = true;
//import the modules
var express = require("express");
var mongodb = require("mongodb");
//create the rest object
var app = express();
//create the ref variable
var ashokIT = mongodb.MongoClient;
app.get("/products/:category", function (req, res) {
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ecommerce");
            db.collection("products").find({ "category": req.params.category }).toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//assign the port
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server Started");
});
