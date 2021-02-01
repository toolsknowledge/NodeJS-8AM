"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var ashokIT = mongodb.MongoClient;
var remove = express.Router()["delete"]("/", function (req, res) {
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokit_nodejs");
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, response) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ message: req.body.id + " record deleted successfully !!!" });
                }
            });
        }
    });
});
exports["default"] = remove;
