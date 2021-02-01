//import the modules
import * as express from "express";
import * as mongodb from "mongodb";

//create the rest object
let app:any = express();


//create the ref variable
let ashokIT:any = mongodb.MongoClient;

app.get("/products/:category",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce?retryWrites=true&w=majority",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db:any = connection.db("ecommerce");
            db.collection("products").find({"category":req.params.category}).toArray((err:any,array:any):any=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server Started");
});
