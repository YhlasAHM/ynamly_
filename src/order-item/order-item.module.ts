import { Module } from '@nestjs/common';
import { OrderItem } from './orderItem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemController } from './order-item.controller';
import { OrderItemService } from './order-item.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([OrderItem]),
    ],
    controllers: [OrderItemController],
    providers: [OrderItemService],
    exports: [OrderItemService,TypeOrmModule]
  })
  export class OrderItemModule {}
  