const fs = require('fs');
//create a file
fs.writeFile('example.txt',"this is an exmple",(err)=>{
    if(err)
    console.log(err);
    else
    console.log('File Successfully created');
});
