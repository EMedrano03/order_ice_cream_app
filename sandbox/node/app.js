const utility =require('./utility');
const person =require('./person');

const events = new utility.EventsHandler();

// let bday = new Date;
// bday.setFullYear(1994, 2, 03);

// person.setPerson('firstName','Enmanuel');
// person.setPerson('lastName','Medrano');
// person.setPerson('birthdayDate',bday);
// person.setPerson('favoriteColor','blue');
//colorsList[2] = person.favoriteColor;

//person.getPerson();
/*******************************/

// events.on('FormateoFecha',(arg)=>{
//    console.log('Evento: ',arg)
// });

// events.showEvent('Mensaje de prueba');
/******************************************/

utility.serverPort(3000);
