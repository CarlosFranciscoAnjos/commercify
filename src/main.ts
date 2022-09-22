import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

import redis from 'ioredis';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectRedis from 'connect-redis';

import { AllExceptionsFilter } from './app.exception-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global configurations
  const configService = app.get<ConfigService>(ConfigService);

  // exception handler
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  // swagger documentation
  const swaggerConfiguration = new DocumentBuilder()
    .setTitle('Commercify')
    .setDescription('Ecommerce Application using nestjs & mongodb/mongoose')
    .setContact(
      '@CarlosFranciscoAnjos',
      '/',
      'carlos.francisco.anjos@outlook.com',
    )
    .setVersion('2.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerConfiguration,
  );
  SwaggerModule.setup('/swagger', app, swaggerDocument);

  // redis
  const redisConfig = configService.get('redis');
  const redisClient = new redis(redisConfig.port, redisConfig.host);
  const redisStore = connectRedis(session);

  // sessions w/ passport
  const sessionConfig = configService.get('session');

  app.use(
    session({
      secret: sessionConfig.secret,
      resave: sessionConfig.resave,
      saveUninitialized: sessionConfig.saveUninitialized,
      cookie: {
        maxAge: sessionConfig.maxAge,
      },
      store: new redisStore({ client: redisClient }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // start application
  await app.listen(3000);
}
bootstrap();
