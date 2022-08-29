import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Client } from './interfaces/client.interface';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('api/v1/clients')
@ApiTags('Clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientsService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<Client> {
    return await this.clientsService.findOne(uuid);
  }

  @Post()
  async create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return await this.clientsService.create(createClientDto);
  }

  @Delete(':uuid')
  async delete(@Param('uuid') uuid: string): Promise<Client> {
    return await this.clientsService.delete(uuid);
  }

  @Put(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateClientDto: CreateClientDto,
  ): Promise<Client> {
    return await this.clientsService.update(uuid, updateClientDto);
  }
}
