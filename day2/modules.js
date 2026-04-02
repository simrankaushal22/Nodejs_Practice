//core modules
// fs stands for file system and it is a core module in nodejs
const fs = require('fs')
const os= require('os')

fs.writeFileSync("dummy.txt","trying with modules")

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
console.log(process.pid);