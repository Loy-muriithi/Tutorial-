const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','loy');
const writeStream = fs.createWriteStream('exmple2.txt');
readStream.pipe(writeStream);