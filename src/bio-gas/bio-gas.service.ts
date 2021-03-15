import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArgs, GetDataArgs } from './bio-gas.dto';
import { BioGas } from './bio-gas.schema';

@Injectable()
export class BioGasService {
  constructor(
    @InjectModel(BioGas.name)
    private bioGasDataModel: Model<BioGas>
  ){}

  // async create(station_id:number,humi: number,temp: number,mpxv: number,dfro: number) {
  //   const tableToCreate: BioGas = new this.bioGasDataModel({
  //     station_id,
  //     humi,
  //     temp,
  //     mpxv,
  //     dfro
  //   })
  //   return await tableToCreate.save()
  // }

  async create(args:CreateArgs) {
    const tableToCreate: BioGas = new this.bioGasDataModel({ ...args })
    return await tableToCreate.save()
  }

  // async gets(condition?: GetDataArgs) {
  //   const data = this.bioGasDataModel.find({})
  //   if () {
      
  //   }
  //   return
  // }
}
