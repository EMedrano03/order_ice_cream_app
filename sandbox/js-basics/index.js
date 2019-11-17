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
let person ={
     firstName:null
    ,lastName:null
    ,age:0
    ,birthdayDate:new Date()
}

// Dot Notation
// person.birthdayDate.setFullYear(1994,2,03);
// person.firstName = 'Enmanuel';
// person.lastName = 'Medrano';
// person.age=Math.floor((CURRENT_DATE-person.birthdayDate.getTime())/(MS_PER_YEAR));

//Bracket Notation
person['birthdayDate'].setFullYear(1994,2,03);
person['firstName'] = 'Enmanuel';
person['lastName'] = 'Medrano';
person['age']=Math.floor((CURRENT_DATE-person.birthdayDate.getTime())/(MS_PER_YEAR));

console.log('Name|'+person.firstName + ' ' + person.lastName);
console.log('Age| '+person.age.toString());
console.log('Birthday| '+person.birthdayDate.toString());

person.firstName =  null;
person.lastName =  null;
person.birthdayDate = null;
person.ge=null;



