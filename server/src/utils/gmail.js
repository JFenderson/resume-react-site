// import nodemailer from 'nodemailer';

// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     service: 'Gmail',
//     auth: {
//         type: 'OAuth2',
//         user: 'joseph.fenderson@gmail.com',
//         clientId: '740089731687-7pipbomm18s00o0774igr8g87v5v57k6.apps.googleusercontent.com',
//         clientSecret: 'x9yeKyAWLkbL_n8ew23C6WdX',
//         refreshToken: '1/29ofVkBWwX4o0mT2ptVYd9x55oIDE8BiGTEXdF7pO8w',
//     }
// });

// const sendMail = message => {
//     return new Promise((resolve, reject) => {
//       transporter.sendMail(message, (error, info) => {
//         if (error) {
//           reject(error)
//           return
//         }
//         resolve(info)
//       });
//     })
//   }
  
//   export default sendMail;