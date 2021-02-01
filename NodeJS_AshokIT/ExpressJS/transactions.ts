//create the sub module

import * as express from "express";
let transactions:any = express.Router();
transactions.get("/",(req:any,res:any):any=>{
    res.status(200).json({message:"transaction soon....!"});
});
transactions.get("/pierre",(req:any,res:any)=>{
    res.status(200).json({message:"welcoto to pieree for nodejs"});
});

export default transactions;