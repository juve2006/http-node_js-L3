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

const urlencodedParser = bodyParser.urlencoded({ extended: true })


app.post('/', urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    response.send(`${request.body}`)
});


app.listen(8080, ()=>{
    console.log ('Server start on port '+`${port}`);
})


