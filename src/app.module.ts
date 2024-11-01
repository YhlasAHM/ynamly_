import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderModule } from './order/order.module';
import { MailService } from './mail/mail.service';
import { EmailController } from './mail/mail.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductsModule, UserModule, AuthModule, OrderItemModule, OrderModule],
  controllers: [AppController, EmailController],
  providers: [AppService, MailService],
})
export class AppModule { }