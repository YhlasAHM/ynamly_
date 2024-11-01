import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({description:'username'})
  @IsString()
  @IsNotEmpty()
  username: string;


  @ApiProperty({description:'user phone'})
  @IsPhoneNumber(null)
  @IsNotEmpty()
  phoneNumber: string;


  @ApiProperty({description:'user password'})
  @IsString()
  @MinLength(6)
  password: string;
}