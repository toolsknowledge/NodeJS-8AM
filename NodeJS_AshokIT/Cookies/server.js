//import modules
const express = require("express");
const cookieParser = require("cookie-parser");

//create the rest object
let app = express();


//use the cookieParser module
app.use( cookieParser() );


//create the get request
app.get("/setCookie",(req,res)=>{
    res.cookie("ashokit","nodejs");
    res.cookie("frontend","vuejs");
    res.cookie("backend","node",{maxAge:60000});
    res.send({"mesg":"cokkies set successfully"});
});


//get the cookies
app.get("/getCookies",(req,res)=>{
    console.log( req.cookies );
    res.send( req.cookies );
});


//clear the cookies
app.get("/clearCokkie",(req,res)=>{
    res.clearCookie("ashokit");
    res.clearCookie("frontend");
    res.send({"message":"cookies are cleared"});
});


//assign the port no
app.listen(8080,()=>{
    console.log("Server Started !!!");
});