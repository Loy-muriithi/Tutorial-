const fs = require('fs');
fs.mkdir('tutorial 2', (err)=>{
    if(err)
        console.log(err);
    else{
       fs.rmdir('tutorial 2',(err)=>{
           if(err)
           console.log(err);
           else{
               console.log('succefully deleted the folder';
           }
       });
    }
});