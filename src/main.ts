import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

  // start application
  await app.listen(3000);
}
bootstrap();
