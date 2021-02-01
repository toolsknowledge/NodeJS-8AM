//import express module
const express = require("express");
//create the rest object
const app = express();
//create the get request
app.get("/demo1",(req,res)=>{
    res.send({"message":"welcome to demo1 request"});
});

app.get("/demo2",(req,res)=>{
    res.send({"message":"welcome to demo2 request"});
});
//assign the port no
let port = process.env.PORT || 8080; 
app.listen(port,()=>{
    console.log("Server Started !!!");
});