/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll();
  }
  @Post()
  async create(@Body() userDto: UserDto, @Res() response): Promise<User> {
    try {
      const resp = await this.userService.create(userDto);
      return response
        .status(HttpStatus.CREATED)
        .json({ status: true, message: 'Ok', data: resp });
    } catch (error) {
      return response
        .status(HttpStatus.BAD_REQUEST)
        .json({ status: false, message: error.sqlMessage });
    }
  }
}
