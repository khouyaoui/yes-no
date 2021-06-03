'use strict'
const http = require('http');
const port = 8080;
let maybe = 0,num;
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application/json'});
    res.write(JSON.stringify(new respuesta()));
    res.end();
}).listen(port);
console.log("Listiting in ",port," Try your luck here: http://localhost:8080");

function respuesta (){
    num = (Math.round(Math.random() * (1 - 0) + 0));
    maybe ++;
    if (maybe === 10000){
        maybe = 0;
        return {
            'mmm ': 'Quizás',   
        }
    }
    if (num === 0){
        return {
            'mmm ': 'Sí',
        }
    } else {
        return {
            'mmm ': 'No',
        }
    } 
}