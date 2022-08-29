import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

// import * as mongoose from 'mongoose';
// export const ItemSchema = new mongoose.Schema(
//     {
//         uuid: String,
//         name: String,
//         price: Number,
//         category: String,
//         description: String,
//     }
// );

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({
    required: true,
    unique: true,
    index: true,
    default: randomUUID,
  })
  uuid: string;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  price: number;

  @Prop()
  category: string;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
