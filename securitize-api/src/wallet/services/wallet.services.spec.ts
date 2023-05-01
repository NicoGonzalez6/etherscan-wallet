import { Test, TestingModule } from '@nestjs/testing';
import { WalletServices } from './wallet.services';

describe('WalletService', () => {
  let service: WalletServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletServices],
    }).compile();

    service = module.get<WalletServices>(WalletServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
