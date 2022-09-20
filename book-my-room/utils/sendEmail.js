const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d7413a83345afd",
      pass: "f9b06ae5c169ca",
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    // from: `${process.env} ${process.env}`, // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
  });
};

export default sendEmail;
