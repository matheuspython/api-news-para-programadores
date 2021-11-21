import nodemailer from 'nodemailer'

class SendEmail {
  async execute(email:String, texto:String, titulo:String) {
    
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.FROM,
    to: email,
    subject: 'email de noticia',
    text: texto,
    html: `
    <h1>${titulo}</h1>
    <p>${texto}</p>
  `
  };

  transporter.sendMail(mailOptions, (error, info) =>{
    if (!error) {
      console.log('Email enviado: ' + info.response);
      return
    }
    console.log(error);
  }); 
}}


export { SendEmail }
