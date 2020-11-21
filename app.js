const fs = require('fs');
const readStream = fs.createReadStream('./eample,txt','utf8');
const writeStream = fs.createWriteStream('exmple2.txt');
readStream.on(writeStream);