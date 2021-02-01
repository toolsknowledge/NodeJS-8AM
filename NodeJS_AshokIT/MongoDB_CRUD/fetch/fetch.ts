//import express module
//express module, used to develop the rest services
import * as express from "express";
//import mongodb module
//mongodb module, used to connect to mongodb database
import * as mongodb from "mongodb";
//create the client
//mongodb follows the "client server" architecture
let ashokIT:any = mongodb.MongoClient;
//ashokIT is the client
//create the module
let fetch:any = express.Router().get("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db:any = connection.db("ashokit_nodejs");
            db.collection("products").find().toArray((err:any,array:any[]):any=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});
//export the module
export default fetch;