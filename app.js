const fs = require('fs');
const readStream = fs.createReadStream('./example.txt',)
const writeStream = fs.createWriteStream('exmple2.txt');
readStream.pipe(writeStream);