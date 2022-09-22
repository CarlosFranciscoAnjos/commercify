import { Injectable } from '@nestjs/common';
import { User } from './users/interfaces/user.interface';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Commercify Ecommerce Application\n@CarlosFranciscoAnjos';
  }

  getStatus(): string {
    return 'Ok';
  }

  logIn(): string {
    return 'Logged In';
  }

  getUserpage(sessionUser: User): object {
    const { hash, ...user } = sessionUser;
    return user;
  }
}
