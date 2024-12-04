const fs = require ('fs');

//Synchronous part
const dataSync = fs.readFileSync('read.txt','utf-8')
console.log(dataSync);
console.log('dataSync');


//Asynchronous part
fs.readFile('read.txt','utf-8',(err,data)=>{
console.log(data);
})
console.log('dataAsync');