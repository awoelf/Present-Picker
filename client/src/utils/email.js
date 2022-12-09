require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (recipients, subject, html) => {
    // Email content
    const msg = {
        to: recipients,
        from: 'alexis@presentpickerapp.com',
        subject: subject,
        html: html,
      }
    sgMail
    .send(msg)
    .then(() => {
        console.log(`Email sent to ${recipients}`)
    })
    .catch((error) => {
        console.error(error)
    })
}

module.exports = sendEmail;