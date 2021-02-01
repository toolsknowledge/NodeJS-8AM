//Http Server
//"http" is the predefined module in nodejs, used to create the Http Server
//no need to download http module
//http module already available along with the node software


//import module (http module)
//require() function used to import the module
let http = require("http");


let server = http.createServer((req,res)=>{
    res.write("<h1>welcome to http server</h1>");
    res.end();
});


server.listen(8080);
console.log("server listening the port no.8080");




//http://localhost:8080/?uname=ashokit&upwd=ashokit



















