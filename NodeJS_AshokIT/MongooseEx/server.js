//import modules
let express = require("express");
let bodyparser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//create the rest object
let app = express();
//enable the cors policy
app.use(cors());
//set the json as MIME Type
app.use(bodyparser.json());
//parse the client data
app.use(bodyparser.urlencoded({extended:false}));
//connect to database
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority",{useNewUrlParser:true});

//define and initilize the schema
const employeeSchema = new mongoose.Schema({
    e_id:Number,
    e_name:String,
    e_sal:Number
});

//apply above schema to database by using mongoose
const employees = mongoose.model("employees",employeeSchema);


//create the rest api
app.post("/employee",(req,res)=>{
        const newRecord = new employees({
            e_id : req.body.e_id,
            e_name : req.body.e_name,
            e_sal : req.body.e_sal
        });
        newRecord.save((err,result)=>{
            if(err) throw err;
            else{
                res.status(200).json({insert:"success"});
            }
        });
});


app.get("/allEmployees",(req,res)=>{
    employees.find({},(err,docs)=>{
        if(err) throw err;
        else{
            res.send(docs);
        }
    });
});


//assign the port no
app.listen(8080,()=>{
    console.log("server started successfully");
});