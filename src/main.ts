import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import redis from 'ioredis';
import * as session from 'express-session';
import * as passport from 'passport';
import * as connectRedis from 'connect-redis';

import { AllExceptionsFilter } from './app.exception-filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global configurations

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
  const redisClient = new redis(6379, 'localhost');
  const redisStore = connectRedis(session);

  // sessions w/ passport
  app.use(
    session({
      secret: 'session-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600_000,
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
