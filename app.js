const fs = require('fs');
fs.mkdir('tutorial 2', (err)=>{
    if(err)
        console.log(err);
    else{
         fs.writeFile('./tutorial 2/exampl.txt','123',(err)=>{
             if(err)
             console.log(err);
             else{
                 console.log('successfully created file');
             }
         });
        
    }
});