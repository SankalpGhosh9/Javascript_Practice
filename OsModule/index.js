const os = require ('os');
console.log(os.arch());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.platform());
console.log(os.type());

//For RAM Memory
const FreeMem = os.freemem();
console.log(`${FreeMem / 1024 / 1024 / 1024 }`); //its in bit so we need to convert it into GB

const totalMem = os.totalmem();
console.log(`${totalMem / 1024 / 1024 / 1024 }`); //its in bit so we need to convert it into GB

// const DiskMem = os.cpus();
// console.log(DiskMem);

