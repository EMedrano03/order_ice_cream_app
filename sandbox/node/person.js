const utility =require('./utility');

//ARRAY
let colorsList = ['red', 'black'];

//OBJECT
let person = {
     firstName: null
    ,lastName: null
    ,favoriteColor: null
    ,birthdayDate: new Date()
}

//FUNCIONES
function setPerson(pProperty,pValue) {
        person[pProperty] = pValue;
}


function getAge(inDate) {
    return Math.floor((utility.CURRENT_DATE - inDate) / (utility.MS_PER_YEAR));
}

function getPerson() {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${getAge(person.birthdayDate)}`);
    console.log(`Birthday: ${utility.formatDate(person.birthdayDate)}`);
   
}

function clearPerson() {
    person['firstName'] = Null;
    person['lastName'] = Null;
    person['favoriteColor'] = Null;
    person['birthdayDate'] = Null;

}

exports.setPerson=setPerson;
exports.getPerson=getPerson;
exports.clearPerson=clearPerson;
