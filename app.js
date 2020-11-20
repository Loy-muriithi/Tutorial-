const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello word from nodejs');
        res.end();
    }
    res.write('Hello World from nodejs');
    res.end();
});

server. listen('3000');