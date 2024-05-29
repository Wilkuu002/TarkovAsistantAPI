import { Controller, Get, Param } from '@nestjs/common';
import { TarkovService } from './tarkov.service';

@Controller('tarkov')
export class TarkovController {
  constructor(private readonly tarkovService: TarkovService) {}

  @Get()
  getHello(): string {
    return 'Tarkov endpoint is working!';
  }

  @Get('item/:itemName')
  getItem(@Param('itemName') itemName: string) {
    return this.tarkovService.fetchItemData(itemName);
  }
}
