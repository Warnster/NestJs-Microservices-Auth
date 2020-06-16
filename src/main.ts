import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, RedisOptions, TcpOptions, Transport} from "@nestjs/microservices";
import {Logger} from "@nestjs/common";

const logger = new Logger('Main');

const microserviceOptions : RedisOptions = {
    transport: Transport.REDIS,
    options: {
        url: 'redis://127.0.0.1:6379'
    }
}

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microserviceOptions,
  );
  app.listen(() => logger.log('Microservice is listening'));
 // await app.listen(3003);
}
bootstrap();
