import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TarkovService {
  constructor(private readonly httpService: HttpService) {}

  async fetchItemData(itemName: string): Promise<any> {
    const query = `
      {
        items(name: "${itemName}") {
          id
          name
          shortName
          avg24hPrice
        }
      }
    `;

    try {
      const response = await firstValueFrom(
        this.httpService.post('https://api.tarkov.dev', { query }),
      );

      return response.data.data.items[0];
    } catch (error) {
      throw new HttpException(
        'Failed to fetch item data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
