import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExchangeServices } from '../services/exchange.services';
import {
  EditExchangeRateDto,
  GetExchangeRateByIdDto,
  CalculateExchangeDto,
  ExchangeResponseDto,
  GetResponseBalanceEthToMoneyDto,
} from '../dtos';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
  constructor(private exchangeServices: ExchangeServices) {}

  @ApiResponse({
    type: ExchangeResponseDto,
    isArray: true,
    status: 200,
  })
  @Get('/')
  async getExchangesRates() {
    return await this.exchangeServices.getAll();
  }

  @ApiResponse({
    type: GetResponseBalanceEthToMoneyDto,
    isArray: false,
    status: 200,
  })
  @Post('/balance/:id')
  async calculateExchangeBalance(
    @Param() { id }: GetExchangeRateByIdDto,
    @Body() { balanceInEth }: CalculateExchangeDto,
  ) {
    return await this.exchangeServices.calculateBalance(id, balanceInEth);
  }

  @ApiResponse({
    type: ExchangeResponseDto,
    status: 200,
  })
  @Patch('/:id')
  async editExchangeRates(
    @Param() { id }: GetExchangeRateByIdDto,
    @Body() { rate }: EditExchangeRateDto,
  ) {
    return await this.exchangeServices.editRate(id, rate);
  }
}
