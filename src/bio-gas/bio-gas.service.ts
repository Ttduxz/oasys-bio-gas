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

  async create(args:CreateArgs) {
    const tableToCreate: BioGas = new this.bioGasDataModel({ ...args })
    return await tableToCreate.save()
  }

  async gets({ station_id }): Promise<BioGas[]> {
    const data = this.bioGasDataModel.find({})
    if (station_id) {
      data.find({station_id})
    }
    return data.exec()
  }
}
