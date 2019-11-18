const utility =require('./utility');
const person =require('./person');

//
const http = require('http');
const EventEmitter = require('events');

const emitter = EventEmitter()

emitter.on('TEST-1',function() {
   console.log('Test fue disparado'); 
});

let bday = new Date;
bday.setFullYear(1994, 2, 03);


person.setPerson('firstName','Enmanuel');
person.setPerson('lastName','Medrano');
person.setPerson('birthdayDate',bday);
person.setPerson('favoriteColor','blue');
//colorsList[2] = person.favoriteColor;

person.getPerson();
emitter.emit('TEST-1');
var patObjet =path.parse(__filename);

//console.log(__filename);
//console.log(patObjet);
