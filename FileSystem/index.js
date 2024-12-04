const fs = require('fs');  //require is similar like import but for nodeJs

//creating a new file 
fs.writeFileSync('index1.js','Hii');
fs.writeFileSync('index1.js','console.log("Hii")'); //if data is not present it will create but if data is present then it  will overwrite it.{"writeFileSync"}

fs.appendFileSync('index1.js',"\n alert('Hii I am fine.')"); // add data to the file 


const buf_data = fs.readFileSync('index1.js'); // if we only give filepath to read_data then Nodejs will give us buffer data
console.log(buf_data);
// <Buffer 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 22 48 69 69 22 29 0a 20 61 6c 65 72 74 28 27 48 69 69 20 49 20 61 6d 20 66 69 6e 65 2e 27 29>
// 
org_data = buf_data.toString(); //so we need to convert buffer data  to string to read  the data into readable form
console.log(org_data);

const b = (fs.readFileSync('index.js')).toString(); //testing the above code in oneliner
console.log(b)

fs.renameSync('index1.js','test.js');
