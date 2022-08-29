import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return 'Commercify Ecommerce Application\n@CarlosFranciscoAnjos';
  }

  getStatus(): string {
    return 'Ok';
  }
}
