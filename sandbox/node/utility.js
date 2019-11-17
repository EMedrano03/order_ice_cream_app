//CONSTANTES
const MS_PER_YEAR = (1000 * 60 * 60 * 24 * 365.25);
const CURRENT_DATE = new Date();
const itAlive = true;

function formatDate(inDate) {
    var day = inDate.getDate().toString();
    var month = (inDate.getMonth() + 1).toString();
    var year = inDate.getFullYear().toString();;
 return (`${day}-${month}-${year}`);
}
S