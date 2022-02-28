import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import * as sendgrid from '@sendgrid/mail'

interface SendEmailForgotPassword {
  (email: string, username: string, captchaIndex: string, token: string): Promise<void>
}

export const sendEmailForgotPassword: SendEmailForgotPassword = async (email, username, captchaSolution, token) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

  const link = `${process.env.FRONTEND_URL}/reset-password?key=${token}`;
  console.log(link);
  const message: MailDataRequired = {
    to: email,
    from: { name: 'NearAcademy', email: process.env.FROM_EMAIL as string },
    subject: 'Password reset',
    text: `
      Dear ${username},
      <br/>
      <br/>
      Please enter the following: ${captchaSolution} <br />on <a href="https://near.academy/reset-password?key=${token}">https://near.academy/reset-password?key=${token}</a>
      <br/>
      <br/>
      NEAR Academy.
    `,
    html: `
      Dear ${username},
      <br/>
      <br/>
      Please enter the following: ${captchaSolution} <br />on <a href="https://near.academy/reset-password?key=${token}">https://near.academy/reset-password?key=${token}</a>
      <br/>
      <br/>
      NEAR Academy.
    `,
  }

  await sendgrid.send(message)
}
