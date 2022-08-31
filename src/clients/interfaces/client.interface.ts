import { ApiProperty } from '@nestjs/swagger';

export class Client {
  @ApiProperty()
  uuid?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty({ required: false })
  phone?: string;
  @ApiProperty({ required: false })
  address?: string;
}
