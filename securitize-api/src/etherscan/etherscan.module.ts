import { Module } from '@nestjs/common';
import { EtherscanService } from './services/etherscan.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [EtherscanService],
})
export class EtherscanMOdule {}
