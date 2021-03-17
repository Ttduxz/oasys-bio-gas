import { BadGatewayException, Body, Controller, DefaultValuePipe, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateArgs } from './bio-gas.dto';
import { BioGas } from './bio-gas.schema';
import { BioGasService } from './bio-gas.service';

@Controller('bio-gas')
export class BioGasController {
  
  constructor(private readonly bioGasService: BioGasService){}

  @Post()
  create( @Body() args: CreateArgs) {
    try {
      const res = this.bioGasService.create(args)
      return res
    } catch (error) {
      throw new BadGatewayException()
    }
  }

  @Get()
  async gets(
    /**
     * Default 0 is nothing value of find in mongoose
     */
    @Query('station_id', new DefaultValuePipe(0), new ParseIntPipe()) station_id?: number
  ): Promise<BioGas[]> {
    try {
      return await this.bioGasService.gets({
        station_id
      })
    } catch (error) {
      throw new BadGatewayException()
    }
  }
}
