import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

let transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    // host: "smtp.mailtrap.io",
    // port: 2525,
    host: 'smtp.gmail.com',
    auth: {
        user: 'sandunpvt@gmail.com',
        pass: '0332225256'
    }
}));

class EmailHelper{

    async sendTextEmail(emaildata){
        const mailOptions = {
            from: '"SipZone Education Institute"<sandunpvt@gmail.com>',
            to: emaildata.email,
            subject: emaildata.subject,
            text: emaildata.text,
        };

        transporter.sendMail(mailOptions, function (error, info){
            if (error) {
                console.log(error)
            } else {
                console.log(info);
            }
        });
    }

    async sendEmailWithAttachment(reportData){
            const {QRImagePath,studentEmail,studentName} = reportData;
           
            const mailOptions = {
                from: '"SipZone Education Institute"<sandunpvt@gmail.com>',
                to: studentEmail,
                subject: `Hi ${studentName}`,
                text: 'Check out this attached image file for your QR code',
                attachments: [{
                    filename: `${studentName}.jpeg`,
                    path: QRImagePath,
                    contentType: 'application/jpeg'
                  }],
            };
    
            transporter.sendMail(mailOptions, function (error, info){
                if (error) {
                    console.log(error);    
                } else {
                   console.log(info);
                }
            });
    }
}

const emailHelper = new EmailHelper();
export default emailHelper;
