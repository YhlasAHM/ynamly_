import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { UserModule } from 'src/user/user.module';
import { OrderItemModule } from 'src/order-item/order-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    UserModule,
    OrderItemModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
