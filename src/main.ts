import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {

  const app = await NestFactory.create <NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname,'..','uploads'));

  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Api url')
  .setDescription('Ynamly Market API Description')
  .setVersion('1.0')
  .addTag('Products')
  .build();


  const document  = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('api-docs',app,document);

  await app.listen( process.env.Port || 3000);
}
bootstrap();
