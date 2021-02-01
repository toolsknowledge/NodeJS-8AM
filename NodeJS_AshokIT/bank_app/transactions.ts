import * as express from "express";
let transactions:any = express.Router();
const auth1:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let token = allHeaders.token;
    if(token === "abc123"){
        next();
    }else{
        res.status(400).json({"auth1":"failed"});
    }
};
const auth2:any = (req:any,res:any,next:any):any=>{
    let allHeaders:any = req.headers;
    let wish = allHeaders.wish;
    if(wish === "hello"){
        next();
    }else{
        res.status(400).json({"auth2":"failed"});
    }
};
transactions.get("/",[auth1,auth2],(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to transactions module"});
});
export default transactions;