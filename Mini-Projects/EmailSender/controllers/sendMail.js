const nodemailer = require("nodemailer");

const sendEmail = async(req,res) =>{
 let testAccount = await nodemailer.createTestAccount();

 let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "colby.miller@ethereal.email",
        pass: "vUSSbSBfKqYrpH8ux6",
    }
});

const info = await transporter.sendMail({
    from: '"San S Ghosh 👻" <sankalp09ghosh@gmail.com>', // sender address
    to: "vipermain009@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world :- smtp server", // plain text body
    html: "<b>Hello smtp server world?</b>", // html body
  });

  console.log("Message sent : %s",info.messageId)
 res.json(info);
}

module.exports = sendEmail