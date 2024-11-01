import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EmailDto } from './dto/email.dto';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    // Nodemailer konfigürasyonu
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // TLS port
      secure: false, // Use true for SSL, false for TLS
      auth: {
        user: 'ahmedovyhlas001@gmail.com', // Your Gmail address
        pass: 'rivg akxs abgn ybsu', // The 16-character App Password from Google
      },
    });
  }

  async sendMail(emailDto: EmailDto) {
    const mailOptions = {
      from: 'ahmedovyhlas001@gmail.com',
      ...emailDto,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}