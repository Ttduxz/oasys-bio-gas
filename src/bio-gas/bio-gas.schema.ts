import { Document, Types } from 'mongoose';
import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: {
    createdAt: '_createdAt',
    updatedAt: '_updatedAt',
  }
})
export class BioGas extends Document {
  _createdAt: Date
  _updatedAt: Date

  @Prop({ type: Number, required: true })
  station_id: number

  @Prop({ type: Number, required: true })
  humi: number
  
  @Prop({ type: Number, required: true }) 
  temp: number

  @Prop({ type: Number, required: true })
  mpxv: number

  @Prop({ type: Number, required: true })
  dfro: number
}

export const BioGasSchema = SchemaFactory.createForClass(BioGas);
