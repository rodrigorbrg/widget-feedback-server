
import nodemailer from "nodemailer";

import Email, { EmailModel } from '.';

class Mailtrap implements Email {
  private mailtrap = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bd2f0e37d22506",
      pass: "67173a4eed7d47"
    }
  });

  async sendEmail(content: EmailModel) {
    await this.mailtrap.sendMail({
      from: 'Equipe de Suporte <suporte@biancard.com.br>',
      to: 'Rodrigo <rodrigorbrg@gmail.com>',
      subject: 'Novo Feedback',
      html: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;"/>',
        `<p>Tipo do feedback: ${content.type}</p>`,
        `<p>Comentário: ${content.comment}</p>`,
      ].join(''),
    });
  };
}

export default Mailtrap;