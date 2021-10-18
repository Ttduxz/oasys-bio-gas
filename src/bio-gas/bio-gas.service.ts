import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArgs } from './bio-gas.dto';
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

  async gets({ ID }): Promise<BioGas[]> {
    const data = this.bioGasDataModel.find({}).sort({_id:-1})
    if (ID) {
      data.find({ID})
    }
    return data.exec()
  }
}
