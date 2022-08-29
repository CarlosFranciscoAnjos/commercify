import { Injectable, NestMiddleware } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response, NextFunction } from 'express';

import logger from './app.logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req['uuid'] = randomUUID().slice(0, 8);
    logger.info(`(${req['uuid']}) ${req.method} ${req.originalUrl}`);
    res.on('close', () =>
      logger.info(`(${req['uuid']}) HTTP ${res.statusCode}`),
    );
    next();
  }
}
