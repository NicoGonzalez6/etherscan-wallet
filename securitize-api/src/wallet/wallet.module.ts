import { Module } from '@nestjs/common';
import { WalletControllers } from './controllers/wallet.controllers';
import { WalletServices } from './services/wallet.services';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wallet } from '@wallets-api/models';
import { EtherscanService } from 'src/etherscan/services/etherscan.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SequelizeModule.forFeature([Wallet]), HttpModule],
  controllers: [WalletControllers],
  providers: [WalletServices, EtherscanService],
})
export class WalletModule {}
