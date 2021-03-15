import {
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class GetDataFilter {
  @Type(() => Number)
  station_id?: number

  @Type(() => Number)
  humi?: number

  @Type(() => Number)
  temp?: number

  @Type(() => Number)
  mpxv?: number

  @Type(() => Number)
  dfro?: number
}

export class GetDataArgs {
  @IsOptional()
  @ValidateNested()
  @Type(() => GetDataFilter)
  filters?: GetDataFilter;
}

export class CreateArgs {
  @Type(() => Number)
  station_id: number

  @Type(() => Number)
  humi: number

  @Type(() => Number)
  temp: number

  @Type(() => Number)
  mpxv: number

  @Type(() => Number)
  dfro: number
}


