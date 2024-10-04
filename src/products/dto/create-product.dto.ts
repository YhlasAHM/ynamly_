import { ApiProperty } from "@nestjs/swagger";
import {  IsNotEmpty, Length } from "class-validator";


export class CreateProductDto{
    @ApiProperty({description:' Product name'})
    @IsNotEmpty({message:'The Product should have a name '})
    @Length(3,255)
    name: string;

    @ApiProperty({description:'Product description'})
    @IsNotEmpty({message: 'The Product should have a description'})
    @IsNotEmpty()
    description: string;

    @ApiProperty({description: 'Product price'})
    @IsNotEmpty({message: 'The Product should have a price'})
    @IsNotEmpty()
    price: number;

    @ApiProperty({description: 'Product image'})
    @IsNotEmpty({message: 'The Product should have a image'})
    @IsNotEmpty()
    imageUrl : string;
}