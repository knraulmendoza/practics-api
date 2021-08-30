/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}
  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.user_name = userDto.user_name;
    user.password = userDto.password;

    return await user.save();
  }
}
