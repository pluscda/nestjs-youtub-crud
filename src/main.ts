import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { static as expose } from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(expose('public'));
  const options = new DocumentBuilder()
    .setTitle('NestJS Crud  example')
    .setDescription('NestJS Crud  example')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
