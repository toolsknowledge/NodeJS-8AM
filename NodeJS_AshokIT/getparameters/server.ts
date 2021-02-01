//http://localhost:8080/login?uname="admin"&upwd="admin"
//import express module
import * as express from "express";
//rest services,  GET, POST , PUT, DELETE,.......
let app:any = express();


//authorization
let auth = (req:any,res:any,next:any):any=>{
    let allHeaders = req.headers;
    if(allHeaders.token === "ashokIT"){
        next();
    }else{
        res.status(500).json({auth:"fail"});
    }
};
//get request
app.get("/login",[auth],(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(201).json({login:"sucess"});
    }else{
        res.status(401).json({login:"fail"});
    };
});

//default request
app.get("/",(req:any,res:any):any=>{
    res.sendFile("D:/NodeJS/NodeJS_AshokIT/getparameters/index.html");
});



app.listen(8080,()=>{
    console.log("server started successfully !!!");
});