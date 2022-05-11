const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')


const port = 8080;

const app = express();

app.get('/', function (request, response) {
    response.send('Hello World! /get');
    console.log (request.method);
    console.log (request.url);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', function (request, response) {
    if (!request.body) return response.sendStatus(400);
    response.send(`${request.body}`);
    console.log(request.body);
});


app.listen(8080, ()=>{
    console.log ('Server start on port '+`${port}`);
});

