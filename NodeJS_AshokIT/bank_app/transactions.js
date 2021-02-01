"use strict";
exports.__esModule = true;
var express = require("express");
var transactions = express.Router();
var auth1 = function (req, res, next) {
    var allHeaders = req.headers;
    var token = allHeaders.token;
    if (token === "abc123") {
        next();
    }
    else {
        res.status(400).json({ "auth1": "failed" });
    }
};
var auth2 = function (req, res, next) {
    var allHeaders = req.headers;
    var wish = allHeaders.wish;
    if (wish === "hello") {
        next();
    }
    else {
        res.status(400).json({ "auth2": "failed" });
    }
};
transactions.get("/", [auth1, auth2], function (req, res) {
    res.status(200).json({ "message": "welcome to transactions module" });
});
exports["default"] = transactions;
