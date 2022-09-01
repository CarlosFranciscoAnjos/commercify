import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import logger from 'src/app.logger';

@Injectable()
export class MongoConfig implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions():
    | Promise<MongooseModuleOptions>
    | MongooseModuleOptions {
    const mongo = this.configService.get('mongo');
    logger.debug(mongo.url);
    return { uri: mongo.url };
  }
}

@Injectable()
export class PostgresConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    const postgres = this.configService.get('postgres');
    logger.debug(postgres.url);
    return {
      type: 'postgres',
      url: postgres.url,
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}
