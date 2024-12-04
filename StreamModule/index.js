const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
  // this is normal way to read data but its not livestream
//   fs.readFile("input.txt",'utf-8',(err,data)=>{
//    if(err) return console.log(err);
//    res.end(data.toString());
//   })
 
  // this is livestream way to read data
  const rdstream =  fs.createReadStream('input.txt');
  rdstream.on('data',(chunkdata)=>{
   res.write(chunkdata);
  })
  rdstream.on('end',()=>{
    res.end()
  })

});

server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening to port 9000")
})