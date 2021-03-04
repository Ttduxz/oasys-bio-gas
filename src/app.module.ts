import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BioGasModule } from './bio-gas/bio-gas.module';

@Module({
  imports: [BioGasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
