import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { Client } from './interfaces/client.interface';
import { UsersService } from 'src/users/users.service';
import { UserRoles } from 'src/users/user-roles.enum';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
    private readonly usersService: UsersService,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientModel.find();
  }

  async findOne(uuid: string): Promise<Client> {
    return await this.clientModel.findOne({ uuid: uuid });
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    // create user w/ role of 'client'
    const user = await this.usersService.create({
      uuid: createClientDto.uuid,
      email: createClientDto.email,
      password: '/',
      role: UserRoles.CLIENT
    });
    const { uuid, ...client } = createClientDto;
    client['uuid'] = user.uuid;
    return await this.clientModel.create(client);
  }

  async delete(uuid: string): Promise<Client> {
    // ensure consistency w/ users
    const client = this.clientModel.findOneAndRemove({ uuid: uuid });
    await this.usersService.delete(uuid);
    return client;
  }

  async update(
    uuid: string,
    createClientDto: CreateClientDto,
  ): Promise<Client> {
    // ensure consistency w/ users
    return await this.clientModel.findOneAndUpdate(
      { uuid: uuid },
      createClientDto,
      //{
      //  returnOriginal: false,
      //},
    );
  }
}
