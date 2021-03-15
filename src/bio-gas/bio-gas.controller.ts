import { BadGatewayException, Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CreateArgs } from './bio-gas.dto';
import { BioGasService } from './bio-gas.service';

@Controller('bio-gas')
export class BioGasController {
  
  constructor(private readonly bioGasService: BioGasService){}

  @Get()
  create( @Query() args: CreateArgs) {
    try {
      const res = this.bioGasService.create(args)
      return res
    } catch (error) {
      throw new BadGatewayException()
    }
  }
}
