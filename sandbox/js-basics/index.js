//Console log Sample
//console.log('Testing from JS file');

//Variable Sample
import EventEmitter from 'events';

EventEmitter.
const MS_PER_YEAR = (1000 * 60 * 60 * 24 * 365.25);
const CURRENT_DATE = new Date();
const itAlive = true;

// let firstName='';
// let lastName='';
// let age=0;
// let birthdayDate=new Date();
let selection = 'all';
let colorsList = ['red', 'black'];
let person = {
    firstName: null
    , lastName: null
    , age: 0
    , favoriteColor: null
    , birthdayDate: new Date()
}

function setPerson(pProperty,pValue) {
    person[pProperty] = pValue;
}

function getAge(inDate) {
    //inDate =new Date(inDate);
    return Math.floor((CURRENT_DATE - inDate) / (MS_PER_YEAR));
}

function showOnBrowser() {
    console.log('Name|' + person.firstName + ' ' + person.lastName);
    console.log('Age| ' + person.age.toString());
    console.log('Birthday| ' + person.birthdayDate.toString());
}
function clearPerson() {
    person = null
}

//Bracket Notation
person['birthdayDate'].setFullYear(1994, 2, 03);
setPerson('firstName','Enmanuel');
setPerson('lastName','Medrano');
setPerson('favoriteColor','blue');
setPerson('age',getAge(person['birthdayDate']));
colorsList[2] = person.favoriteColor;

showOnBrowser();
clearPerson();
showOnBrowser();




