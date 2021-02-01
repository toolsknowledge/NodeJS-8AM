const fs = require("fs");

/*
    //read the data asynchronously
    fs.readFile("demo.txt",(err,res)=>{
        if(err) throw err;
        else{
            console.log(res.toString());
        }
    });



    //read the data synchronously
    const res = fs.readFileSync("demo.txt");
    console.log(res.toString());
*/


/*
    //write the data asynchronously
    fs.writeFile("demo.txt","Hello",(err)=>{
        if(err) throw err;
        else{
            console.log("Write Operation Success");
        }
    });


    //write the data synchronously
    fs.writeFileSync("demo.txt","Welcome");
    console.log("data written successfully !!!");
*/


/*
    //append the data asynchronously
    fs.appendFile("demo.txt","NodeJS",(err)=>{
        if(err) throw err;
        else{
            console.log("data appended successfully !!!");
        }
    });    
*/

/*
    //append the data synchronously
    fs.appendFileSync("demo.txt","Hello");
    console.log("data appended synchronously");
*/



//open the file asynchronously
fs.open("new.txt","r+",(err,fd)=>{
    if(err) throw err;
    else{
        console.log("file opended successfully !!!");
        
        //rename the file asynchronously
        fs.rename("new.txt","new1.txt",(err)=>{
            if(err) throw err;
            else{
                console.log("file renamed successfully");
                
                //read operation
                fs.readFile("new1.txt",(err,res)=>{
                    if(err) throw err;
                    else{
                        console.log(res.toString());
                        console.log("data read successful");

                        //write the data
                        fs.writeFile("new1.txt","This is File System",(err,result)=>{
                            if(err) throw err;
                            else{
                                console.log("data write successfully !!!");
                                //truncate
                                fs.truncate("new1.txt",10,(err)=>{
                                    if(err) throw err;
                                    else{
                                        console.log("truncate operation success");
                                        //close the file
                                        fs.close(fd,(err)=>{
                                            if(err) throw err;
                                            else{
                                                console.log("file closed successfully !!!");
                                                //delete the file
                                                fs.unlink("new1.txt",(err)=>{
                                                    if(err) throw err;
                                                    else{
                                                        console.log("file deleted sucessfully !!!");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});




















































