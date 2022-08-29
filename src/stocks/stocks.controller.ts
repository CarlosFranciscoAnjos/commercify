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

import { Stock } from './interfaces/stock.interface';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('api/v1/stocks')
@ApiTags('Stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  async findAll(): Promise<Stock[]> {
    return await this.stocksService.findAll();
  }

  @Get('byItem')
  async findByItem(@Query('item') item: string): Promise<Stock> {
    return await this.stocksService.findByItem(item);
  }

  @Post()
  async create(@Body() createStockDto: CreateStockDto): Promise<Stock> {
    return await this.stocksService.create(createStockDto);
  }

  @Delete()
  async deleteByItem(@Query('item') item: string): Promise<Stock> {
    return await this.stocksService.deleteByItem(item);
  }

  @Put()
  async updateByItem(
    @Query('item') item: string,
    @Body() updateStockDto: CreateStockDto,
  ): Promise<Stock> {
    return await this.stocksService.updateByItem(item, updateStockDto);
  }
}
