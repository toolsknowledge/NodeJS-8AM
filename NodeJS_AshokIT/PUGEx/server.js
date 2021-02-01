const express = require("express");
const pug = require("pug");

let app = express();

app.set("view engine","pug");
app.set("views","./views");

app.get("/demo",(req,res)=>{
    res.render("demo",{name:"AshokIT",
                       url:"http://www.ashokit.in"});
});

app.listen(8080,()=>{
    console.log("server started !!!");
});