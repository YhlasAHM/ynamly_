import { IsDecimal, IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class OrderItemDTO {
    @IsInt()
    productId: number;

    @IsInt()
    qty: number;
}

export class OrderDTO {
    @ApiProperty({ description: 'totalAmount' })
    @IsDecimal({ decimal_digits: '2' })
    totalAmount: number;

    @ApiProperty({ description: 'productId qty' })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => OrderItemDTO)
    orderItems: OrderItemDTO[];
}
