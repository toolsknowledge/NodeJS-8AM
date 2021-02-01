import * as express from "express";

let accounts:any = express.Router();

accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"welcome to accounts module"});
});

accounts.post("/",(req:any,res:any):any=>{
    res.status(200).json({message:"account will add soon"});
});

export default accounts;