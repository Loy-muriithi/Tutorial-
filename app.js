const fs = require('fs');
fs.mkdir('tutorial', (err)=>{
    if(err)
        console.log(err);
    else{
         console.log('folder successfuly created');
    }
})