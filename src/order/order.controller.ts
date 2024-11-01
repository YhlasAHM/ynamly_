import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrderController {
    constructor(private orderService : OrderService){}

    @Post()
    async createOrder(@Body() orderDto:OrderDto ): Promise<Order>{
        return await this.orderService.createOrder(orderDto)
    }
}
