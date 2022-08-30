import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import logger from 'src/app.logger';

@Injectable()
export class MongoConfig implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    const mongo = this.configService.get('mongo');
    logger.debug(mongo.uri)
    return { uri: mongo.uri };
  }
}
