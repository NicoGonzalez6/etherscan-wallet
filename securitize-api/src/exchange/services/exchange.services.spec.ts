import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeServices } from './exchange.services';

describe('ServicesService', () => {
  let service: ExchangeServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeServices],
    }).compile();

    service = module.get<ExchangeServices>(ExchangeServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
