"use strict";
exports.__esModule = true;
//import express modu;e
var express = require("express");
//import body-parser module
//body-parser module used to read the "post" parameters
var bodyparser = require("body-parser");
//create the rest object
var app = express();
//this rest objet used to develop the rest services, GET, POST, PUT,DELETE,....
//set the MIME Type
app.use(bodyparser.json());
//receive the form data, and parse the data (extended Ex. uname, upwd...)
app.use(bodyparser.urlencoded({ extended: false }));
//authorization code
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
//create the post request
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
app.listen(8080, function () {
    console.log("server started successfully");
});
