import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserSchema } from './schemas/user.schema';
import { CryptService } from 'src/auth/auth.crypt';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private usersRepository: Repository<UserSchema>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(uuid: string): Promise<User> {
    return await this.usersRepository.findOneBy({ uuid: uuid });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...user } = createUserDto;
    user.uuid = user.uuid ?? randomUUID();
    user['hash'] = await CryptService.hash(password);
    return await this.usersRepository.save(user);
  }

  async delete(uuid: string): Promise<User> {
    const user = await this.findOne(uuid);
    if (!user) return null;
    await this.usersRepository.delete(user);
    return user;
  }

  async update(uuid: string, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.findOne(uuid);
    if (!user) return null;
    await this.usersRepository.update(user, updateUserDto);
    return user;
  }
}
