import { Document, Types } from 'mongoose';
import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps:{
    createdAt: "ServerTime",
    updatedAt: false
  }
})
export class BioGas extends Document {
  @Prop({ type: Number, required: true })
  ID: number

  @Prop({ type: Number, required: true })
  Humi: number
  
  @Prop({ type: Number, required: true }) 
  Temp: number

  @Prop({ type: Number, required: true })
  MPXV: number

  @Prop({ type: Number, required: true })
  DFRo: number

  @Prop({ type: String, required: true })
  TimeStamp: Date
}

export const BioGasSchema = SchemaFactory.createForClass(BioGas);
