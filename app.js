const express = require('express');
const path = require('path');
const Joi = require('joi');
const bodyParser = require('body-parser');
const app = express();

app.use('/puplic',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.post('/',(req,res)=>{
     console.log(req.body);
     const schema = Joi.Object().keys({
        email :  Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(15).required()
     });
     Joi.Validate(req.body,schema,(err,result)=>{
         if(err){
             console.log(err);
             res.send('An error has occurred');
         }
         console.log(result);
         res.send('Sucessfully posted data');
     });
    
});
app.listen(3000);
