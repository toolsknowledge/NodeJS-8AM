"use strict";
exports.__esModule = true;
//import express module
//express module, used to develop the rest services
var express = require("express");
//import mongodb module
//mongodb module, used to connect to mongodb database
var mongodb = require("mongodb");
//create the client
//mongodb follows the "client server" architecture
var ashokIT = mongodb.MongoClient;
//ashokIT is the client
//create the module
var fetch = express.Router().get("/", function (req, res) {
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("ashokit_nodejs");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
//export the module
exports["default"] = fetch;
