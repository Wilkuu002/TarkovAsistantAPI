import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarkovController } from './tarkov/tarkov.controller';
import { TarkovService } from './tarkov/tarkov.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TarkovController],
  providers: [AppService, TarkovService],
})
export class AppModule {}
