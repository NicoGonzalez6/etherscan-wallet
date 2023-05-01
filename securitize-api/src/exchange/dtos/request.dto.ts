import { ApiProperty } from '@nestjs/swagger';
import { IexchangeRate } from '@wallets-api/definitions';
import { IsNotEmpty } from 'class-validator';

export class GetExchangeRateByIdDto implements Pick<IexchangeRate, 'id'> {
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: 'rate id',
  })
  id: number;
}

export class EditExchangeRateDto implements Pick<IexchangeRate, 'rate'> {
  @IsNotEmpty()
  @ApiProperty({
    example: '3200',
    description: 'New Rate for the selected currency',
  })
  rate: number;
}

export class CalculateExchangeDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '622.911',
    description: 'Balance in eth',
  })
  balanceInEth: number;
}
