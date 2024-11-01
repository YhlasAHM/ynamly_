import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";


export class EmailDto {
    @ApiProperty({ description: 'email' })
    @IsEmail()
    @IsNotEmpty()
    to: string;

    @ApiProperty({ description: ' subject' })
    @IsNotEmpty()
    subject: string;

    @ApiProperty({ description: 'message' })
    @IsNotEmpty()
    message: string;

}
