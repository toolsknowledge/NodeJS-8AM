//import modules
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const mongodb = require("mongodb");

let ashokIT = mongodb.MongoClient;

//create the rest object
let app = express();


//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());


//read the json
app.use(bodyparser.urlencoded({extended:false}));



//create the storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});


//handover storage object to multer module
const upload = multer({storage:storage});


//create the post request
app.post("/uploadImage",upload.single("myPhoto"),(req,res,next)=>{
    const file = req.file;

    

    if(!file){
        let error = new Error("please upload file");
        error.httpStatusCode = 400;
        return next(error);
    }else{
        const image = fs.readFileSync(req.file.path);
        const image_encode = image.toString("base64");
        const record = {
            "image":image_encode,
            "mimetype":req.file.mimetype
        };
        ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/multer?retryWrites=true&w=majority",(err,conn)=>{
            if(err) throw err;
            else{
                let db = conn.db("multer");
                db.collection("images").insertOne(record,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({insert:"success"});
                        res.sendFile(__dirname+"/index.html");
                    }
                });
            }
        });

        
    }
});


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.get("/photo",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/multer?retryWrites=true&w=majority",
        (err,conn)=>{
            if(err) throw err;
            else{
                const db = conn.db("multer");
                db.collection("images").find().toArray((err,arr)=>{
                    
                    if(err) throw err;
                    else{
                        res.contentType('image/jpeg');
                        
                        //res.send( arr[0].image.buffer );
                    }
                });
            }
    })
});



//assign the port number
app.listen(8080,()=>{
    console.log("Server Started !!!")
});
