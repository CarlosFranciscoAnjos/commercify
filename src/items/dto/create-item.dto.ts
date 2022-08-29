import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ required: false })
  readonly uuid?: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly price: number;

  @ApiProperty({ required: false })
  readonly category?: string;

  @ApiProperty({ required: false })
  readonly description?: string;
}
