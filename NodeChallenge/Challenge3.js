
const bio ={
    name:"San",
    age: 23,
    loaction: "Mumbai",
    status:"Learning NodeJs"
}

const jsonData = JSON.stringify(bio);
const fs = require('fs');
// fs.writeFile('test.json',jsonData,()=>{
//     console.log("done");
// })
fs.readFile('test.json','utf-8',(err,data)=>{
    console.log(data);
    const objData = JSON.parse(jsonData);
    console.log(objData);
})

module.exports ={jsonData}