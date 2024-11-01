import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ access_token: string, refresh_token: string }> {
      const user = await this.authService.validateUser(loginDto.phoneNumber, loginDto.password);
      if (!user) {
          throw new UnauthorizedException('Invalid credentials');
      }
      return await this.authService.login(user); 
  }

  @Post('refresh')
  async refresh(@Body() refreshTokenDto: { refreshToken: string }) {
      const payload = await this.authService.verifyRefreshToken(refreshTokenDto.refreshToken);
      const user = await this.userService.findOneById(payload.sub); 
      if (!user) {
          throw new UnauthorizedException();
      }
      return this.authService.login(user); 
  }
}