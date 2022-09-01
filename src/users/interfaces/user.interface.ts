import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  uuid?: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  hash: string;
  @ApiProperty()
  role: string;
}
