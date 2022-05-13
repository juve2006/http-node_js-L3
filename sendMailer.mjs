import nodemailer from "nodemailer";

const yourEmail = "yourEmail@gmail.com";
const yourPass = "yourEmailPasswrd";
const mailHost = "gmail.com";
const mailPort = 587;
const senderEmail = "senderEmail@gmail.com"


/**
 * Send mail
 * @param {string} to
 * @param {string} subject
 * @param {string[html]} htmlContent
 * @returns
 */
const sendMail = (to, subject, htmlContent) => {
    let transporter = nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // use SSL - TLS
        auth: {
            user: yourEmail,
            pass: yourPass,
        },
    });
    let mailOptions = {
        from: senderEmail,
        to: to,
        subject: subject,
        html: htmlContent,
        attachments: [{
            filename: 'out.txt.zip',
            path: '/'
        }]
    };
    return transporter.sendMail(mailOptions); // promise
};


export default sendMail;