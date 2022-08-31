import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserSchema } from './schemas/user.schema';
import { CryptService } from 'src/auth/auth.crypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserSchema)
    private usersRepository: Repository<UserSchema>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(uuid: string): Promise<User> {
    return await this.usersRepository.findOneBy({ uuid: uuid });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { uuid, email, password } = createUserDto;
    const user = {
      uuid: uuid,
      email: email,
      hash: await CryptService.hash(password),
    };
    return await this.usersRepository.save(user);
  }

  // async delete(uuid: string): Promise<User> {
  //   return await this.usersRepository.findOneAndRemove({ uuid: uuid });
  // }

  // async update(uuid: string, user: User): Promise<User> {
  //   return await this.usersRepository.findOneAndUpdate({ uuid: uuid }, user, {
  //     returnOriginal: false,
  //   });
  // }
}
