import { ApiProperty } from '@nestjs/swagger';

export abstract class Item {
  @ApiProperty()
  uuid?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty({ required: false })
  category?: string;
  @ApiProperty({ required: false })
  description?: string;
}
