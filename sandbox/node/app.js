const modUtility =require('./utility');
const modPerson =require('./person');

let bday = new Date;
bday.setFullYear(1994, 2, 03);


modPerson.setPerson('firstName','Enmanuel');
modPerson.setPerson('lastName','Medrano');
modPerson.setPerson('birthdayDate',bday);
modPerson.setPerson('favoriteColor','blue');
//colorsList[2] = person.favoriteColor;

modPerson.getPerson();
