import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';

import logger from 'src/app.logger';
import { AuthService } from './auth.service';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(uuid: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(uuid, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
