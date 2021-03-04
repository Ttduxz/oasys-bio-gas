import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BioGas } from './bio-gas.schema';

@Injectable()
export class BioGasService {
  constructor(
    @InjectModel(BioGas.name)
    private bioGasDataModel: Model<BioGas>
  ){}

  async create(_id:string,humi: number,temp: number,mpxv: number,dfro: number) {
    const tableToCreate: BioGas = new this.bioGasDataModel({
      _id,
      humi,
      temp,
      mpxv,
      dfro
    })
    return await tableToCreate.save()
  }
}
