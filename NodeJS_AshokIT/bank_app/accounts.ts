import * as express from "express";
//create the module
let accounts:any = express.Router();
//create the get request
accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to accounts module"});
});
accounts.get("/login",(req:any,res:any):any=>{
    if( req.query.uname === "admin" && req.query.upwd === "admin"){
        res.status(200).json({"login":"success"});
    }else{
        res.status(400).json({"login":"fail"});
    }
});
//export the module
export default accounts;