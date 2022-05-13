const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const zlib = require('zlib');
const {request, response} = require("express");


const port = 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post('/', function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data = request.body;
    response.send(data);
    fs.writeFileSync('text.txt', JSON.stringify(data), (error) => {
        if (error) console.log(error);
    });
});

app.get('/', function (request, response,next) {
    const fileStream = fs.createReadStream(`${__dirname}\\out.txt`);
    fileStream.on('open', ()=> {
        response.attachment('out.txt');
        fileStream.pipe(response);
    })
    fileStream.on('error', err => {
        next(err);
    });
});

app.get ('/zip', (request, response, next) => {
    let file = fs.readFileSync('out.txt'); // sync is for readability
    let gzip = zlib.gzipSync(file); // is instance of Uint8Array
    response.write(gzip);
    response.send
});

app.listen(8080, ()=>{
    console.log ('Server start on port '+`${port}`);
});


