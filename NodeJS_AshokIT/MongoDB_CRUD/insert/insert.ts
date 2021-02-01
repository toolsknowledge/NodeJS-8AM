import * as express from "express";
import * as mongodb from "mongodb";
let ashokIT = mongodb.MongoClient;
let insert = express.Router().post("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("ashokit_nodejs");
            db.collection("products").insertOne({"id":req.body.id,
                                                 "name":req.body.name,
                                                 "quantity":req.body.quantity,
                                                 "price":req.body.price,
                                                 "category":req.body.category,
                                                 "image":req.body.image},(err:any,result:any):any=>{
                if(err) throw err;
                else{
                    res.send({message:"record inserted successfully !!!"});
                }
            })
        }
    });
});
export default insert;