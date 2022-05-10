const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const url = require('url');


const PORT = 8080;


const app = express();
app.get('/', function (request, response) {
    response.send('Hello World! /get');
    console.log (request.method);
    console.log (request.url);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (request, response) => {
    console.log('Got body:', request.body);
    response.sendStatus(200);
    console.log (request.method);
    console.log (request.url);
});

app.listen(8080, ()=>{
    console.log ('Server start on port '+`${PORT}`);
})