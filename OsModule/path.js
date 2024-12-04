const path = require('path');
console.log(path.dirname("D:/personal-studies-practical/NodeJs/FileSystem/index.js"));
console.log(path.extname("D:/personal-studies-practical/NodeJs/FileSystem/index.js"));
console.log(path.basename("D:/personal-studies-practical/NodeJs/FileSystem/index.js"));

const myPath = path.parse("D:/personal-studies-practical/NodeJs/OsModule/path.js");
console.log(myPath.root);
console.log(myPath.ext);
console.log(myPath.name);
console.log(myPath.dir);