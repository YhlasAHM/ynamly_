import { ApiProperty } from "@nestjs/swagger";
import { OrderItemDto } from "src/order-item/dto/orderItem.dto";


export class OrderDto{

    @ApiProperty({description:'Order userId '})
    userId: number;

    @ApiProperty({description:' totalAmount for the order'})
    totalAmount: number;

    @ApiProperty({description:" Order's orderItems",type:[OrderItemDto]})
    orderItems: OrderItemDto[]
    
}