const express = require("express");
let app = express();

app.get("/",(req,res)=>{
    res.send({sub_one:"NodeJS"});
});

app.get("/deno",(req,res)=>{
    res.send({sub_one:"Deno"});
});

app.get("/go",(req,res)=>{
    res.send({sub_one:"Go"});
});

let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server Started");
});