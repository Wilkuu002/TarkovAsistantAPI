import { Module } from '@nestjs/common';
import { TarkovController } from './tarkov.controller';
import { TarkovService } from './tarkov.service';

@Module({
  controllers: [TarkovController],
  providers: [TarkovService],
})
export class TarkovModule {}
