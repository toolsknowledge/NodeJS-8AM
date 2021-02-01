//read get parameters in expressjs

// http://localhost:8080/login/uname/admin/upwd/admin

/*
    import * as express from "express";
    let app:any = express();
    app.get("/login/uname/:uname/upwd/:upwd",(req:any,res:any):any=>{
        if(req.params.uname === "admin" && req.params.upwd === "admin"){
            res.status(200).json({login:"success"});
        }else{
            res.status(400).json({login:"fail"});
        }
    });
    app.listen(8080,()=>{
        console.log("server started successfully on port no.8080");
    });
*/




//http://localhost:8080/login?uname=admin&upwd=admin
//req.query.uname
//req.query.upwd
import * as express from "express";
let app:any = express();
app.get("/login",(req:any,res:any):any=>{
    if(req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(201).json({login:"success"});
    }else{
        res.status(401).json({login:"fail"});
    }
});
app.listen(8080,()=>{
    console.log("server started");
});

















