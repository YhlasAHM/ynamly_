import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Post('signup')
    async create(@Body() createUserDto:CreateUserDto ): Promise<User>{
       return await this.userService.create(createUserDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getUser(@Request() req) {
        const userId = req.user.userId;
        const user = await this.userService.findOneById(userId);
        return user;
  }
}
