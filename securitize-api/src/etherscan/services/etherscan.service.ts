import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IetherscanResult } from '../dtos';

@Injectable()
export class EtherscanService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  API_URL = this.configService.get<string>('API_URL');
  API_KEY = this.configService.get<string>('API_KEY');

  async getAccountBalanceInWei(address: string): Promise<IetherscanResult> {
    const url = `${this.API_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${this.API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));

    if (data.result.length == 0) {
      throw new NotFoundException(`No Account found with address: ${address}`);
    }

    return data;
  }

  async getFirstTransactionDateElapsed(address: string): Promise<number> {
    const url = `${this.API_URL}?module=account&action=txlist&address=${address}&&startblock=0&endblock=99999999&page=1&offset=1&sort=asc&apikey=${this.API_KEY}`;

    const { data } = await firstValueFrom(this.httpService.get(url));

    if (data.result.length == 0) {
      throw new NotFoundException(`No Account found with address: ${address}`);
    }

    const dateOfFirstTransaction = new Date(data?.result[0].timeStamp * 1000);
    const currDate = new Date();

    const diffBetweenDates =
      currDate.getTime() - dateOfFirstTransaction.getTime();

    const DaysSinceFirst = Math.floor(diffBetweenDates / (24 * 60 * 60 * 1000));

    return DaysSinceFirst;
  }
}
