//import the modules
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const multer = require("multer");
const mongodb = require("mongodb");

//create the rest object
const app = express();


//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());


//parse the json
app.use(bodyparser.urlencoded({extended:false}));


//define storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});


//handover storage to multer module
const upload = multer({storage:storage});


//create the post request
app.post("/singleFile",upload.single("myFile"),(req,res,next)=>{
    const file = req.file;
    if(!file){
        let error = new Error("please upload file");
        error.httpStatusCode = 400;
        return next(error);
    }else{
        res.send(file);
    }
});


app.post("/multipleFiles",upload.array("myFiles",12),(req,res,next)=>{
    const files = req.files;
    if(!files){
        let error = new Error("please upload file");
        error.httpStatusCode = 400;
        return next(error);
    }else{
        res.send(files);
    }
});


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.listen(8080,()=>{
    console.log("Server Started !!!");
}); 

let ashokIT = mongodb.MongoClient;

app.post("/photo",upload.single("myPhoto"),(req,res,next)=>{
    let path = req.file.path;
    
    ashokIT("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/workshop?retryWrites=true&w=majority",(err,connection)=>{
        console.log(connection);
        if(err) throw err;
        let db = connection.db("workshop");
        db.collection("employees").insertOne({"path":path},(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    });
});


