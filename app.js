const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//         else{
//        fs.writeFile('./tutorial/example.txt','123',(err)=>{
//            if(err)
//            console.log(err);
//            else{
//                console.log('successfully created file');
//            }
//        })
//         }
// })

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else{
//         fs.rmdir('tutorial',(err)=>{
//         else{
//             console.log('deleted folder');
//         }

    
// })
fs.readdir('example',(err,files)=>{
   if(err)
   console.log(err);
   else{
       console.log(files);
   }
});
