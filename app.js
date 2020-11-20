const fs = require(fs);
// create a file
fs.WriteFile('example.txt',"this is an example",(err)=>{
    if(err)
    console.log(err); 
    else
    console.log('File Succesfully created');
});