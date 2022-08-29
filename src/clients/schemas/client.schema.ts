import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

// import * as mongoose from 'mongoose';
// export const ClientSchema = new mongoose.Schema(
//     {
//         uuid: String,
//         name: String,
//         email: String,
//         phone: String,
//         address: String,
//     }
// );

export type ClientDocument = Client & Document;

@Schema()
export class Client {
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
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
