"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var update = express.Router().put("/", function (req, res) {
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokit_nodejs");
            db.collection("products").updateOne({ "id": req.body.id }, { $set: { "price": req.body.price, "quantity": req.body.quantity } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated sucessfully !!!" });
                }
            });
        }
    });
});
exports["default"] = update;
