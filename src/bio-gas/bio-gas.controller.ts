import { BadGatewayException, Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { BioGasService } from './bio-gas.service';

@Controller('bio-gas')
export class BioGasController {
  
  constructor(private readonly bioGasService: BioGasService){}

  @Get()
  findOne(
    @Query('id') _id: string,
    @Query('humi', ParseIntPipe) humi: number,
    @Query('temp', ParseIntPipe) temp: number,
    @Query('mpxv', ParseIntPipe) mpxv: number,
    @Query('dfro', ParseIntPipe) dfro: number
  ) {
    try {
      const res = this.bioGasService.create(_id,humi,temp,mpxv,dfro);
      return res
    } catch (error) {
      throw new BadGatewayException()
    }
  }
}
