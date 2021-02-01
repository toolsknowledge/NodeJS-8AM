import * as express from "express";
import * as mongodb from "mongodb";
let ashokIT:any = mongodb.MongoClient;
let update:any = express.Router().put("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority",(err:any,connection:any)=>{
        if(err) throw err;
        else{
            let db = connection.db("ashokit_nodejs");
            db.collection("products").updateOne({"id":req.body.id},
                                                {$set:{"price":req.body.price,"quantity":req.body.quantity}},
                                                (err:any,result:any):any=>{
                    if(err) throw err;
                    else{
                        res.send({message:"record updated sucessfully !!!"});
                    }
            });
        }
    });
});
export default update;