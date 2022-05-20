import nodemailer from 'nodemailer';

const yourEmail = "your@gmail.com";
const yourPass = "pass";

const sendM = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // use SSL - TLS
        auth: {
            user: yourEmail,
            pass: yourPass,
        },
    });
    let mailOptions = {
        from: yourEmail,
        to: yourEmail,
        subject: 'subject',
        attachments: [{
            filename: 'out.txt.zip',
            path: './out.txt.zip'
        }]
    };

    transporter.sendMail(mailOptions)
        .then(function (){
            console.log('Email sent!');
        })
        .catch(function (error){
            console.log(error);
        })

}

export { sendM };