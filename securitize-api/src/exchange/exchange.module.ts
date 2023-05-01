import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exchange } from '@wallets-api/models';
import { ExchangeController } from './controllers/exchange.controllers';
import { ExchangeServices } from './services/exchange.services';

@Module({
  imports: [SequelizeModule.forFeature([Exchange])],
  controllers: [ExchangeController],
  providers: [ExchangeServices],
})
export class ExchangeModule {}
