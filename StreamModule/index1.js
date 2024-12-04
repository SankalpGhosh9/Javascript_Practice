// easy way to read and write stream using "stream.pipe()" method

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    const rdstream =  fs.createReadStream('input.txt');
    rdstream.pipe(res) ;   
})

server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening to port 9000")
})