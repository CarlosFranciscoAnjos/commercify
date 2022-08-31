import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

import logger from 'src/app.logger';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(uuid: string, password: string): Promise<any> {
    logger.debug(`${uuid} ${password}`);
    const user = await this.authService.validateUser(uuid, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
