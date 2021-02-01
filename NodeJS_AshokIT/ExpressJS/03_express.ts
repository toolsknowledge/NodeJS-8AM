//import express module
import * as express from "express";


let app:any = express();
//app object used to develop the rest services
//Ex.  GET, POST, PUT , DELETE,....


//get request
app.get("/ashokit",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to typescript with nodejs"});
});


//assign the port no
app.listen(8080,()=>{
    console.log("server started successfully !!!");
});