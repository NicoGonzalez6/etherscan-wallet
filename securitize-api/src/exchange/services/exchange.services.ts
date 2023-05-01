import { Injectable, NotFoundException } from '@nestjs/common';
import { Exchange } from '@wallets-api/models';
import { IexchangeRate } from '@wallets-api/definitions';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ExchangeServices {
  constructor(
    @InjectModel(Exchange)
    private exchangeModel: typeof Exchange,
  ) {}

  async getAll(): Promise<IexchangeRate[]> {
    const rates = await this.exchangeModel.findAll({
      order: [['id', 'ASC']],
    });
    return rates;
  }

  async editRate(id: number, rate: number): Promise<IexchangeRate> {
    const singleRate = await this.exchangeModel.findOne({
      where: {
        id: id,
      },
    });

    if (!singleRate)
      throw new NotFoundException(`No rate found with id: ${id}`);

    const newRate = await this.exchangeModel.update(
      { rate: rate },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
    return newRate[1][0];
  }

  async calculateBalance(id: number, balanceInEth: number): Promise<string> {
    const singleRate = await this.exchangeModel.findOne({
      where: {
        id: id,
      },
    });

    if (!singleRate)
      throw new NotFoundException(`No rate found with id: ${id}`);

    const balance = singleRate.rate * balanceInEth;

    return String(balance.toFixed(2));
  }
}
