"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var insert = express.Router().post("/", function (req, res) {
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokit_nodejs");
            db.collection("products").insertOne({ "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.image }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record inserted successfully !!!" });
                }
            });
        }
    });
});
exports["default"] = insert;
