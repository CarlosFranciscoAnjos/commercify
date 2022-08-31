import { Injectable } from '@nestjs/common';
import logger from 'src/app.logger';

import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import { CryptService } from './auth.crypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(uuid: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(uuid);
    logger.debug(JSON.stringify(user));
    if (user && CryptService.verify(password, user.hash)) return user;
    return null;
  }
}
