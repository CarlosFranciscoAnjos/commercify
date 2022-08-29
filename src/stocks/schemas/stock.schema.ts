import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// import * as mongoose from 'mongoose';
// export const StockSchema = new mongoose.Schema(
//     {
//         item: String,
//         quantity: Number,
//         date: Date,
//     }
// );

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  item: string;

  @Prop({
    required: true,
  })
  quantity: number;

  @Prop({
    required: true,
    default: new Date().toISOString(),
  })
  date: Date;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
