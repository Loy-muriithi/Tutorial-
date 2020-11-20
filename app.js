const http = require('https');
const server = http.createServer((req,res)=>{
    res.write('Hello World from nodejs');
    res.end();
});
server. listen('3000');