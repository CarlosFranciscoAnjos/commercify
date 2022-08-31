import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/v1/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<User> {
    return await this.usersService.findOne(uuid);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  //   @Delete(':uuid')
  //   async delete(@Param('uuid') uuid: string): Promise<User> {
  //     return await this.usersService.delete(uuid);
  //   }

  //   @Put(':uuid')
  //   async update(
  //     @Param('uuid') uuid: string,
  //     @Body() updateUserDto: CreateUserDto,
  //   ): Promise<User> {
  //     return await this.usersService.update(uuid, updateUserDto);
  //   }
}
