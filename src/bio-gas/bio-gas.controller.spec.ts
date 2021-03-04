import { Test, TestingModule } from '@nestjs/testing';
import { BioGasController } from './bio-gas.controller';

describe('BioGasController', () => {
  let controller: BioGasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BioGasController],
    }).compile();

    controller = module.get<BioGasController>(BioGasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
