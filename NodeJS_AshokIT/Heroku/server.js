let express = require("express");
let app = express();
app.get("/",(req,res)=>{
    res.status(200).json({"message":"Hello"});
});
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server stated");
});