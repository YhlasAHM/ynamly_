import { ApiProperty } from "@nestjs/swagger";

export class OrderItemDto{
    
    @ApiProperty({description:'orderId for the orderItem'})
    orderId: number;

    @ApiProperty({description:'productId for the orderItem'})
    productId: number;

    @ApiProperty({description:'quantity of the product'})
    quantity: number;

    @ApiProperty({description:'price of the product'})
    price: number;

}