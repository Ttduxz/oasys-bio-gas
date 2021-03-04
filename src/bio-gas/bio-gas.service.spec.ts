import { Test, TestingModule } from '@nestjs/testing';
import { BioGasService } from './bio-gas.service';

describe('BioGasService', () => {
  let service: BioGasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BioGasService],
    }).compile();

    service = module.get<BioGasService>(BioGasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
