import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ClientsModule } from './clients/clients.module';
import { StocksModule } from './stocks/stocks.module';
import { SalesModule } from './sales/sales.module';
import { LoggerMiddleware } from './app.logger-middleware';
import { MongoConfig, PostgresConfig } from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`src/config/${process.env.NODE_ENV}.env`],
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongoConfig,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresConfig,
    }),
    ItemsModule,
    ClientsModule,
    StocksModule,
    SalesModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
