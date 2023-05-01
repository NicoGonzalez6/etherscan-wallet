import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Iwallets } from '@wallets-api/definitions';

export class GetWalletsResponseDto implements Iwallets {
  @ApiProperty({
    example: '1',
    description: 'Wallet id',
  })
  id?: number;
  @ApiProperty({
    example: '0x35ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503',
    description: 'Account number',
  })
  address: string;
  @ApiProperty({
    example: '584999077701347770335037',
    description: 'Balance in weight',
  })
  balance_in_weight: string;
  @ApiProperty({
    example: '584999.077701347770335037',
    description: 'Balance in ETH',
  })
  balance_in_eth: string;
  @ApiPropertyOptional({
    example: false,
    description: 'Wallet is favorite',
  })
  isFavorite: boolean;
  @ApiProperty({
    example: false,
    description: 'Account first transaction have more than 1 year old',
  })
  isOld: boolean;
  @ApiProperty({
    example: '2023-04-29T18:10:14.416Z',
    description: 'Wallet creation date',
  })
  createdAt: Date;
  @ApiProperty({
    example: '2023-04-29T18:10:14.416Z',
    description: 'Wallet last update date',
  })
  updatedAt: Date;
}
