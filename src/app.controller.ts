import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.guard';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return this.appService.getHome();
  }

  @UseGuards(LocalAuthGuard)
  @Get('api/v1/status')
  getStatus(): string {
    return this.appService.getStatus();
  }
}
