// const nodemailer = require('nodemailer')
// require('dotenv').config()

// module.exports = (app) => {

// //setting up post route for gmail to send.
// app.post('/contact', (req, res) => {

//     console.log(req.body)

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             type: "OAuth2",
//             user: process.env.EMAIL,
//             pass: process.env.WORD,
//             clientId: process.env.OAUTH_CLIENTID,
//             clientSecret: process.env.OAUTH_CLIENT_SECRET,
//             refresthToken: process.env.OAUTH_REFRESH_TOKEN
//         }
//     })

//     transporter.verify((err, success) => {
//         err
//           ? console.log(err)
//           : console.log(`=== Server is ready to take messages: ${success} ===`);
//        });

//     const mailOptions = {
//         from: `${req.body.mailerState.email}`,
//         to: process.env.EMAIL,
//         subject: `Message from ${req.body.mailerState.email}: ${req.body.mailerState.subject}`,
//         text: `${req.body.mailerState.message}`
//     }

//     transporter.sendMail(mailOptions, (error, info) => {
//         if(error){
//             console.log(error);
//             res.send('error');
//         } else {
//             console.log('Email sent: ' + info.response)
//             res.send(('success'));
//         }
//     })

// })




// }