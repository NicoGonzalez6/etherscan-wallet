import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { WalletServices } from '../services/wallet.services';
import {
  CreateWalletDto,
  GetWalletsRequestDto,
  GetWalletsResponseDto,
  FindWalletByIdDto,
} from '../dtos';
import { WalletValidationPipe } from '../pipes/wallet.validation.pipe';

@ApiTags('Wallets')
@Controller('wallets')
export class WalletControllers {
  constructor(private walletServices: WalletServices) {}
  @ApiResponse({
    type: GetWalletsResponseDto,
    isArray: true,
    status: 200,
  })
  @Get('/')
  async getAllWallets(@Query() { orderBy }: GetWalletsRequestDto) {
    return await this.walletServices.getAll(orderBy);
  }
  @ApiResponse({
    type: GetWalletsResponseDto,
    status: 201,
  })
  @Post('/')
  @UsePipes(WalletValidationPipe)
  async createWaller(@Body() { address, isFavorite }: CreateWalletDto) {
    return await this.walletServices.create(address, isFavorite);
  }

  @ApiResponse({
    type: GetWalletsResponseDto,
    status: 200,
  })
  @Get('/:id')
  async getSingleWallet(@Param() { id }: FindWalletByIdDto) {
    return await this.walletServices.getSingle(id);
  }

  @ApiResponse({
    status: 200,
  })
  @Delete('/:id')
  async deleteWallet(@Param() { id }: FindWalletByIdDto) {
    return await this.walletServices.delete(id);
  }

  @ApiResponse({
    type: GetWalletsResponseDto,
    status: 200,
  })
  @Patch('/:id')
  async toogleFavorite(@Param() { id }: FindWalletByIdDto) {
    return await this.walletServices.toogleFavorite(id);
  }
}
