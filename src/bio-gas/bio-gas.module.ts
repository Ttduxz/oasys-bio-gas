import { Module } from '@nestjs/common';
import { BioGasService } from './bio-gas.service';
import { BioGasController } from './bio-gas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BioGas, BioGasSchema } from './bio-gas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BioGas.name, schema: BioGasSchema }]),
  ],
  providers: [BioGasService],
  controllers: [BioGasController]
})
export class BioGasModule {}
