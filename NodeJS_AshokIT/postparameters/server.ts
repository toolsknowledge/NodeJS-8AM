//import express modu;e
import * as express from "express";

//import body-parser module
//body-parser module used to read the "post" parameters
import * as bodyparser from "body-parser";


//create the rest object
let app:any = express();
//this rest objet used to develop the rest services, GET, POST, PUT,DELETE,....


//set the MIME Type
app.use( bodyparser.json() );


//receive the form data, and parse the data (extended Ex. uname, upwd...)
app.use( bodyparser.urlencoded({extended:false}) );



//authorization code
let auth:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let token:any  = allHeaders.token;
    if(token === "nodejs") {
        next();
    } else{
        res.status(401).json({auth:"fail"});
    }  
};

//create the post request
app.post("/login",[auth],(req:any,res:any):any=>{
    if( req.body.uname === "admin" && req.body.upwd === "admin" ){
        res.status(200).json({login:"success"});
    }else{
        res.status(401).json({login:"fail"});
    };
});


app.listen(8080,()=>{
    console.log("server started successfully");
});
