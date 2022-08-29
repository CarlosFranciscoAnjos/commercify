import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from 'src/clients/clients.module';
import { ItemsModule } from 'src/items/items.module';

import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SaleSchema } from './schemas/sale.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
    ItemsModule,
    ClientsModule,
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
