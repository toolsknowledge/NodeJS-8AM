const express = require("express");
const mssql = require("mssql");
const bodyparser = require("body-parser");
const cors = require("cors");
let app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.get("/fetch",(req,res)=>{
    mssql.connect({server:"localhost",
                   user:"root",
                   password:"",
                   database:"ashokit"},(err)=>{
        if(err) throw err;
        else{
            console.log("connection success")
        }
    });
});

app.listen(8080,()=>{
    console.log("server started");
});


