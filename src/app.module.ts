import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarkovController } from './tarkov/tarkov.controller';

@Module({
  imports: [],
  controllers: [AppController, TarkovController],
  providers: [AppService],
})
export class AppModule {}
