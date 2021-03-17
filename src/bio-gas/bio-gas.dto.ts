import { Type } from 'class-transformer';

export class CreateArgs {
  @Type(() => Number)
  ID: number

  @Type(() => Number)
  Humi: number

  @Type(() => Number)
  Temp: number

  @Type(() => Number)
  MPXV: number

  @Type(() => Number)
  DFRo: number
}


