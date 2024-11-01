import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserRepository])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService,TypeOrmModule], 
})
export class UserModule {}