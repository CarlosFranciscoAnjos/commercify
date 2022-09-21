import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import * as passport from 'passport';

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
  // sessions w/ passport
  app.use(
    session({
      secret: 'session-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600_000,
      },
      // store: undefined
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // start application
  await app.listen(3000);
}
bootstrap();
