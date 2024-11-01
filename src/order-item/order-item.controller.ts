import { Body, Controller, Post } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('OrderItem')
@Controller('order-item')
export class OrderItemController {

    constructor(private orderItemService: OrderItemService){}



    /* @Post()
    async createOrderItem(@Body ) */
}