import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Sale } from './interfaces/sale.interface';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';

@Controller('api/v1/sales')
@ApiTags('Sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async findAll(): Promise<Sale[]> {
    return await this.salesService.findAll();
  }

  @Get('byItemClient')
  async findByItemClient(
    @Query('item') item: string,
    @Query('client') client: string,
  ): Promise<Sale[]> {
    return await this.salesService.findByItemClient(item, client);
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string): Promise<Sale> {
    return await this.salesService.findOne(uuid);
  }

  @Post()
  async create(@Body() createSaleDto: CreateSaleDto): Promise<Sale> {
    return await this.salesService.create(createSaleDto);
  }

  @Delete(':uuid')
  async delete(@Param('uuid') uuid: string): Promise<Sale> {
    return await this.salesService.delete(uuid);
  }

  @Put(':uuid')
  async update(
    @Param('uuid') uuid: string,
    @Body() updateSaleDto: CreateSaleDto,
  ): Promise<Sale> {
    return await this.salesService.update(uuid, updateSaleDto);
  }
}
