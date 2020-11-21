const fs = require('fs');
fs.readFile('./largefile.txt',(err,file)=>{
    if(err)
    console.log(err);
    else{
        console.log(file);
    }
})