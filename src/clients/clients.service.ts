import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

import { Model } from 'mongoose';
import { Client } from './interfaces/client.interface';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find();
  }

  async findOne(uuid: string): Promise<Client> {
    return await this.clientModel.findOne({ uuid: uuid });
  }

  async create(client: Client): Promise<Client> {
    // create user w/ role of 'client'
    return await this.clientModel.create(client);
  }

  async delete(uuid: string): Promise<Client> {
    // ensure consistency w/ users
    return await this.clientModel.findOneAndRemove({ uuid: uuid });
  }

  async update(uuid: string, client: Client): Promise<Client> {
    // ensure consistency w/ users
    return await this.clientModel.findOneAndUpdate({ uuid: uuid }, client, {
      returnOriginal: false,
    });
  }
}
