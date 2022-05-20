import express from "express";
import fs from "fs";
import { createGzip, createGunzip } from "zlib";
import { sendM } from './sendMailer.js';

const port = 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/', function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let data =  JSON.stringify (request.body);
    const writableStream = fs.createWriteStream('text.txt');
    writableStream.write(data, (error) => {
        if (error) console.log(error);
    });
    response.send (data);
});

app.get('/', function (request, response,next) {
    const fileStream = fs.createReadStream('out.txt');
    // fileStream.on('open', ()=> {      //save file on HDD
    //     response.attachment('out.txt');
    //     fileStream.pipe(response);
    // })
    fileStream.pipe(response);
    fileStream.on('error', err => {
        next(err);
    });
});

app.get ('/zip', (request, response, next) => {
    const readableStream = fs.createReadStream('out.txt');
    const writableStream = fs.createWriteStream('out.txt.zip');
    const gzip = createGzip();
    readableStream.pipe(gzip).pipe(writableStream);
    sendM();
    response.send ('Data zipped, Email has been sent successfully');
  });

app.listen(8080, ()=>{
    console.log ('Server start on port '+`${port}`);
});


