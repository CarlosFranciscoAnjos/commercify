import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ required: false })
  readonly uuid?: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty({ required: false })
  readonly phone?: string;
  @ApiProperty({ required: false })
  readonly address?: string;
}
