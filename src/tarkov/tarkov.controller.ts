import { Controller, Get, Query } from '@nestjs/common';
import { TarkovService } from './tarkov.service';

@Controller('tarkov/items')
export class TarkovController {
  constructor(private readonly tarkovService: TarkovService) {}

  @Get()
  async getItems(@Query('name') name: string) {
    try {
      const itemData = await this.tarkovService.fetchItemData(name);
      return { success: true, data: itemData };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
