import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/v1/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOkResponse({ type: User, isArray: true })
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':uuid')
  @ApiOkResponse({ type: User })
  @ApiNoContentResponse()
  async findOne(@Param('uuid') uuid: string): Promise<User> {
    return await this.usersService.findOne(uuid);
  }

  @Post()
  @ApiCreatedResponse({ type: User })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Delete(':uuid')
  @ApiOkResponse({ type: User })
  async delete(@Param('uuid') uuid: string): Promise<User> {
    return await this.usersService.delete(uuid);
  }

  @Put(':uuid')
  @ApiOkResponse({ type: User })
  async update(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return await this.usersService.update(uuid, updateUserDto);
  }
}
