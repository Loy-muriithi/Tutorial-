const http = require('htt');
const fs = require('fs');
http.createServer((req,res)=>{
     const readstream = fs.createWriteStream('./static/index.html');
     res.writeHead(200,{'Content-type': 'text/html'});
     readstream.pipe(res);
}).listen(3000);