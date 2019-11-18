//MODULES
const EventEmitter = require('events');
const http =require('http');


const server =http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.write('<h1>Funciona :D</h1>');
        res.end();
    }

    if(req.url==='/api/person')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

//CONSTANTES VARIABLE
const MS_PER_YEAR = (1000 * 60 * 60 * 24 * 365.25);
const CURRENT_DATE = new Date();

class EventsHandler extends EventEmitter
{

    showEvent (msg)
    {
        this.emit('FormateoFecha',{id:1,Mensaje:msg});
    }
}

function serverPort (port)
{
    server.listen(port);
    console.log(`Listening on port ${port}.....`);
}


 function formatDate(inDate) {
    if (typeof(inDate)!='Date')
    {
        var day = inDate.getDate().toString();
        var month = (inDate.getMonth() + 1).toString();
        var year = inDate.getFullYear().toString();

        return (`${day}-${month}-${year}`);
    }
    else 
    {
        return "No es una fecha";
    }
   
}

exports.MS_PER_YEAR=MS_PER_YEAR;
exports.CURRENT_DATE=CURRENT_DATE;
exports.formatDate=formatDate;
exports.EventsHandler=EventsHandler;
exports.serverPort=serverPort;