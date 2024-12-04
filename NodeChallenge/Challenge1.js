const fs = require('fs');
fs.mkdirSync("San");  // create - directory

fs.writeFileSync('./San/bio.txt',"Hii i am Sankalp"); // write-new-file
fs.appendFileSync('./San/bio.txt',' Ghosh');    // add content to the existing-file

// const read_data = (fs.readFileSync('./San/bio.txt')).toString(); //read-file
// console.log(read_data);

const read_data2 = fs.readFileSync('./San/bio.txt',{encoding:"utf-8"}) //read-file
console.log(read_data2);

fs.renameSync("./San/bio.txt",'./San/mybio.txt'); //rename
fs.rmSync('./San/mybio.txt') // delete file or use unlinkSync
// fs.unlinkSync('./San/mybio.txt') 
fs.rmdirSync("./San")  // delete directory