const fs = require('fs');

fs.mkdir("./Test",(err)=>{
    console.log("dir is created");
    });
fs.writeFile("./Test/bio.txt","Test is created",(err)=>{
console.log("file is created");
})
fs.appendFile("./Test/bio.txt"," using Asynchronous Nodejs",(err)=>{
    console.log("file is appended with new stuffs");
    })

fs.readFile("./Test/bio.txt","utf-8",(err,data)=>{
    console.log(data);
    })

fs.rename("./Test/bio.txt","mybio.txt",(err)=>{
    console.log("File name is changed");
    })
fs.unlink("./Test/mybio.txt",(err)=>{
    console.log("File is deleted");
})
fs.rmdir("./Test",(err)=>{
    console.log("Directory is deleted");
})