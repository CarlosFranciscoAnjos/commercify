export class CreateClientDto {
  readonly uuid?: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly address?: string;
}
