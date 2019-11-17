//ARRAY
let colorsList = ['red', 'black'];
//OBJECT

let person = {
    firstName: null
    , lastName: null
    , age: 0
    , favoriteColor: null
    , birthdayDate: new Date()
}


//FUNCIONES
function setPerson(pProperty,pValue) {
    person[pProperty] = pValue;
}

function getAge(inDate) {
    //inDate =new Date(inDate);
    return Math.floor((CURRENT_DATE - inDate) / (MS_PER_YEAR));
}

function showOnBrowser() {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age.toString()}`);
    console.log(`Birthday: ${formatDate(person.birthdayDate)}`);
}
function clearPerson() {
    person = null
}
