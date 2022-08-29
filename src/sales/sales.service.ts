import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { ClientsService } from 'src/clients/clients.service';
import { ItemsService } from 'src/items/items.service';
import { Sale } from './interfaces/sale.interface';

@Injectable()
export class SalesService {
  constructor(
    @InjectModel('Sale') private readonly saleModel: Model<Sale>,
    private readonly itemsService: ItemsService,
    private readonly clientsService: ClientsService,
  ) {}

  async findAll(): Promise<Sale[]> {
    return await this.saleModel.find();
  }

  async findOne(uuid: string): Promise<Sale> {
    return await this.saleModel.findOne({ uuid: uuid });
  }

  async findByItemClient(item: string, client: string): Promise<Sale[]> {
    var filter = {};
    if (item) filter['item'] = item;
    if (client) filter['client'] = client;
    return await this.saleModel.find(filter);
  }

  async validate(sale: Sale) {
    if (sale.item) {
      var dbItem = await this.itemsService.findOne(sale.item);
      if (dbItem == null)
        throw new Error(`item not found (uuid: ${sale.item})`);
    }
    if (sale.client) {
      var dbClient = await this.clientsService.findOne(sale.client);
      if (dbClient == null)
        throw new Error(`client not found (uuid: ${sale.client})`);
    }
  }

  async create(sale: Sale): Promise<Sale> {
    await this.validate(sale);
    return await this.saleModel.create(sale);
  }

  async delete(uuid: string): Promise<Sale> {
    return await this.saleModel.findOneAndRemove({ uuid: uuid });
  }

  async update(uuid: string, sale: Sale): Promise<Sale> {
    await this.validate(sale);
    return await this.saleModel.findOneAndUpdate({ uuid: uuid }, sale, {
      returnOriginal: false,
    });
  }
}
