import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Iwallets } from '@wallets-api/definitions';

export class CreateWalletDto
  implements Pick<Iwallets, 'address' | 'isFavorite'>
{
  @IsNotEmpty()
  @ApiProperty({
    example: '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae',
    description: 'address is',
  })
  address: string;
  @ApiPropertyOptional({
    example: true,
    description: 'address is favorite',
  })
  isFavorite: boolean;
}

export class GetWalletsRequestDto {
  @ApiPropertyOptional({
    example: 'isFavorite',
    description: 'order wallets by isFavorite, createdAt',
  })
  orderBy: 'isFavorite' | 'createdAt';
}

export class FindWalletByIdDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: 'Wallet id',
  })
  id: number;
}
