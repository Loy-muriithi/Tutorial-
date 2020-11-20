const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an exmple",(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         console.log('File Successfully created');
//         fs.readFile('exmple.txt','utf8',(err,file)=>{
//           if(err) 
//           console.log(err); 
//           else
//           console.log(file)
//         });
//     }
    
// });

fs.rename('example.txt', 'example2.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('seccessfully renamed the file');
})