import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Stock } from './interfaces/stock.interface';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel('Stock') private readonly stockModel: Model<Stock>,
    private readonly itemsService: ItemsService,
  ) {}

  async findAll(): Promise<Stock[]> {
    return await this.stockModel.find();
  }

  async findByItem(item: string): Promise<Stock> {
    return await this.stockModel.findOne({ item: item });
  }

  async validate(stock: Stock) {
    if (stock.item) {
      var item = await this.itemsService.findOne(stock.item);
      if (item == null) throw new Error(`item not found (uuid: ${stock.item})`);
    }
  }

  async create(stock: Stock): Promise<Stock> {
    await this.validate(stock);
    return await this.stockModel.create(stock);
  }

  async deleteByItem(item: string): Promise<Stock> {
    return await this.stockModel.findOneAndRemove({ item: item });
  }

  async updateByItem(item: string, stock: Stock): Promise<Stock> {
    await this.validate(stock);
    return await this.stockModel.findOneAndUpdate({ item: item }, stock, {
      returnOriginal: false,
    });
  }
}
