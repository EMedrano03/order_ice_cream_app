//CONSTANTES
const MS_PER_YEAR = (1000 * 60 * 60 * 24 * 365.25);
const CURRENT_DATE = new Date();
const itAlive = true;


 function formatDate(inDate) {
    if (typeof(inDate)!='Date')
    {
        var day = inDate.getDate().toString();
        var month = (inDate.getMonth() + 1).toString();
        var year = inDate.getFullYear().toString();;
 return (`${day}-${month}-${year}`);
    }
    else {
        return "No es una fecha";
    }

}

exports.MS_PER_YEAR=MS_PER_YEAR;
exports.CURRENT_DATE=CURRENT_DATE;
exports.formatDate=formatDate;