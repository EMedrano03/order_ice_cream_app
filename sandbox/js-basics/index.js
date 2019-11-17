//Console log Sample
//console.log('Testing from JS file');

//Variable Sample

const MS_PER_YEAR=(1000 * 60 * 60 * 24 * 365.25);
const CURRENT_DATE =new Date();
const itAlive=true;

// let firstName='';
// let lastName='';
// let age=0;
// let birthdayDate=new Date();
let selection='all';
let colorsList=['red','black'];
let person ={
     firstName:null
    ,lastName:null
    ,age:0
    ,favoriteColor:null
    ,birthdayDate:new Date()
}

function showOnBrowser() {
    
}

function clearPerson() {
    person=null 
}

function getAge(inDate) {
    //inDate =new Date(inDate);
    return Math.floor((CURRENT_DATE-inDate)/(MS_PER_YEAR));
}

// Dot Notation
// person.birthdayDate.setFullYear(1994,2,03);
// person.firstName = 'Enmanuel';
// person.lastName = 'Medrano';
// person.age=Math.floor((CURRENT_DATE-person.birthdayDate.getTime())/(MS_PER_YEAR));

//Bracket Notation
person['firstName'] = 'Enmanuel';
person['lastName'] = 'Medrano';
person['birthdayDate'].setFullYear(1994,2,03);
person['favoriteColor']='blue';
person['age']=getAge(person['birthdayDate']);

console.log(getAge(person['birthdayDate']));
colorsList[2]=person.favoriteColor;

console.log('Name|'+person.firstName + ' ' + person.lastName);
console.log('Age| '+person.age.toString());
console.log('Birthday| '+person.birthdayDate.toString());
//console.log(colorsList.length);
clearPerson();




