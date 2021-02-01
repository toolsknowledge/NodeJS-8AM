"use strict";
exports.__esModule = true;
var express = require("express");
//create the module
var accounts = express.Router();
//create the get request
accounts.get("/", function (req, res) {
    res.status(200).json({ "message": "welcome to accounts module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ "login": "success" });
    }
    else {
        res.status(400).json({ "login": "fail" });
    }
});
//export the module
exports["default"] = accounts;
