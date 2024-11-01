import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiTags } from '@nestjs/swagger';
import { EmailDto } from './dto/email.dto';

@ApiTags('email')
@Controller('email')
export class EmailController {
    constructor(private readonly mailService: MailService) { }

    @Post('send')
    async sendEmail(@Body() emailDto: EmailDto) {
        return await this.mailService.sendMail(emailDto);
    }
}