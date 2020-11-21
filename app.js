const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('exmple2.txt');
readStream.pipe(writeStream);