import { Injectable } from '@nestjs/common';
import { LoginDto } from './auth/login.dto';
import { User } from './users/interfaces/user.interface';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Commercify Ecommerce Application\n@CarlosFranciscoAnjos';
  }

  getStatus(): string {
    return 'Ok';
  }

  logIn(loginDto: LoginDto): object {
    return {
      username: loginDto.username,
      status: 'Ok',
    };
  }

  getUserpage(sessionUser: User): object {
    const { hash, ...user } = sessionUser;
    return user;
  }
}
