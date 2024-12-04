const fs = require ('fs');
fs.writeFile("read.txt","This is first Asynchronous Node-file",  // write-file
    (err)=>{
       console.log("file is created");
    }
);
fs.appendFile("read.txt"," using callback functions",(err)=>{           // append-file
    console.log("file is appended");
})

fs.readFile("read.txt",(err,data)=>{   // read-file
let a = data.toString();
console.log(a);
})

fs.readFile("read.txt",'utf8',(err,data)=>{       // read-file
    console.log(data);
    })

