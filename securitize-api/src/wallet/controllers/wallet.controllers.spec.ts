import { Test, TestingModule } from '@nestjs/testing';
import { WalletControllers } from './wallet.controllers';

describe('WalletController', () => {
  let controller: WalletControllers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletControllers],
    }).compile();

    controller = module.get<WalletControllers>(WalletControllers);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
