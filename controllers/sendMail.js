const nodemailer = require("nodemailer");

// send mail
const sendEmail = (to, url, txt) => {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "linhcm981a@gmail.com",
      pass: "LINH123456q",

    },
  });

  const mailOptions = {
    from: "linhcm981a@gmail.com",
    to: to,
    subject: "Activate-Email",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome .</h2>
            <p>Congratulations! You're almost set to start using MANAGER-STUDENT.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };
  console.log("activeta-send-email");
  return smtpTransport.sendMail(mailOptions, (err, response) => {
    console.log("SendEmail|Error>>", err);
    console.log("SendEmail|Info>>", response);
    if (err) return err;
    return response;
  });
};

module.exports = sendEmail;
