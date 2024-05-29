import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class TarkovService {
  async fetchItemData(itemName: string) {
    const response = await fetch('https://api.tarkov.dev/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          items(name: "${itemName}") {
            id
            name
            shortName
            avg24hPrice
          }
        }`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch item data');
    }

    const responseData = await response.json();
    return responseData.data.items[0];
  }
}
