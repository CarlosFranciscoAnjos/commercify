import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { ClientSchema } from 'src/clients/schemas/client.schema';

// import * as mongoose from 'mongoose';
// export const SaleSchema = new mongoose.Schema(
//     {
//         uuid: String,
//         item: String,
//         client: String,
//         date: Date,
//     }
// );

export type SaleDocument = Sale & Document;

@Schema()
export class Sale {
  @Prop({
    required: true,
    unique: true,
    index: true,
    default: randomUUID,
  })
  uuid: string;

  @Prop({
    required: true,
  })
  item: string;

  @Prop({
    required: true,
  })
  client: string;

  @Prop({
    required: true,
    default: new Date().toISOString(),
  })
  date: Date;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
