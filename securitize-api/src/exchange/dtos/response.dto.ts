import { ApiProperty } from '@nestjs/swagger';
import { IexchangeRate } from '@wallets-api/definitions';

export class ExchangeResponseDto implements IexchangeRate {
  @ApiProperty({
    example: '1',
    description: 'rate id',
  })
  id: number;

  @ApiProperty({
    example: 'Usd',
    description: 'Money type',
  })
  currency: string;
  @ApiProperty({
    example: '1900',
    description: 'Exchange rate',
  })
  rate: number;
}

export class GetResponseBalanceEthToMoneyDto {
  @ApiProperty({
    example: '1',
    description: 'Converted Balance from eth to the selected money',
  })
  responnse: number;
}
