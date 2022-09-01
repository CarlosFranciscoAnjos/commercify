import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(uuid: string): Promise<Item> {
    return await this.itemModel.findOne({ uuid: uuid });
  }

  async create(item: Item): Promise<Item> {
    return await this.itemModel.create(item);
  }

  async delete(uuid: string): Promise<Item> {
    return await this.itemModel.findOneAndRemove({ uuid: uuid });
  }

  async update(uuid: string, item: Item): Promise<Item> {
    return await this.itemModel.findOneAndUpdate({ uuid: uuid }, item);
  }
}
