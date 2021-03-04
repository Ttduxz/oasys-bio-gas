import { Module } from '@nestjs/common';
import { BioGasService } from './bio-gas.service';
import { BioGasController } from './bio-gas.controller';

@Module({
  providers: [BioGasService],
  controllers: [BioGasController]
})
export class BioGasModule {}
