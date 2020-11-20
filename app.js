const EventEmitter = require('events');
const  eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let Pedro = new person('Pedro');
let Christina = new person('Christina');
Christinaa.on('name',()=>{
    console.log('my name is ' + Christina);

});
Pedro.on('name',()=>{
    console.log('my name is ' + Pedro.name);
});

Pedro.emit('name');
Christina.emit('name');