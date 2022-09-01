import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { BasicGuard } from './auth/basic.guard';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse()
  getHome(): string {
    return this.appService.getHome();
  }

  @Get('api/v1/status')
  @UseGuards(BasicGuard)
  @ApiOkResponse()
  getStatus(): string {
    return this.appService.getStatus();
  }
}
