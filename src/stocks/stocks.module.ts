import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { StockSchema } from './schemas/stock.schema';
import { ItemsModule } from 'src/items/items.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Stock', schema: StockSchema }]),
    ItemsModule,
  ],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
