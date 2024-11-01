import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class LoginDto {
  @ApiProperty({description:'user phone'})
  @IsPhoneNumber(null)
  @IsNotEmpty()
  phoneNumber: string;


  @ApiProperty({description:'user password'})
  @IsString()
  @IsNotEmpty()
  password: string;
}