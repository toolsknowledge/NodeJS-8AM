import * as express from "express";
import transactions from "./transactions";
import accounts from "./accounts";
let app:any = express();
app.use("/module1",transactions);
app.use("/module2",accounts);
app.listen(8080,()=>{
    console.log("server started");
});


//http://localhost:8080/module1
//http://localhost:8080/module1/pierre
//http://localhost:8080/module2    (GET)
//http://localhost:8080/module2    (POST)