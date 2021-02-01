"use strict";
exports.__esModule = true;
//http://localhost:8080/login?uname="admin"&upwd="admin"
//import express module
var express = require("express");
//rest services,  GET, POST , PUT, DELETE,.......
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "ashokIT") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//get request
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "sucess" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
    ;
});
//default request
app.get("/", function (req, res) {
    res.sendFile("D:/NodeJS/NodeJS_AshokIT/getparameters/index.html");
});
app.listen(8080, function () {
    console.log("server started successfully !!!");
});
