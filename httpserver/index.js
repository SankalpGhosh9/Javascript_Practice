const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const data  = fs.readFileSync('./UserApi/userapi.json','utf-8');
    const objData = JSON.parse(data);
     
   // console.log(req.url);
   if(req.url == '/'){
    res.end('Hello from home side');
   }
 else if(req.url == '/userapi'){
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(objData[0].name);
    }   
 else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end('Status Code : Error 404');
 }
});

server.listen(9000,"127.0.0.1",()=>{
    console.log('Listening to port no. 9000')
});