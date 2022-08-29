import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('api/v1/items')
@ApiTags('Items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiOkResponse({ type: Item, isArray: true })
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':uuid')
  @ApiOkResponse({ type: Item })
  @ApiNoContentResponse()
  async findOne(@Param('uuid') uuid: string): Promise<Item> {
    const item = await this.itemsService.findOne(uuid);
    if (!item) throw new HttpException('', HttpStatus.NO_CONTENT);
    return item;
  }

  @Post()
  @ApiCreatedResponse({ type: Item })
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @Delete(':uuid')
  @ApiOkResponse({ type: Item })
  async delete(@Param('uuid') uuid: string): Promise<Item> {
    return await this.itemsService.delete(uuid);
  }

  @Put(':uuid')
  @ApiOkResponse({ type: Item })
  async update(
    @Param('uuid') uuid: string,
    @Body() updateItemDto: CreateItemDto,
  ): Promise<Item> {
    return await this.itemsService.update(uuid, updateItemDto);
  }
}
