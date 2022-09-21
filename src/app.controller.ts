import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { BasicGuard } from './auth/basic.guard';
import { LocalGuard } from './auth/local.guard';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) { }

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

  @Get('api/v1/login')
  @UseGuards(LocalGuard)
  @ApiOkResponse()
  logIn(): string {
    return this.appService.logIn();
  }

  @Get('api/v1/userpage')
  @UseGuards(AuthenticatedGuard)
  @ApiOkResponse()
  userpage(@Request() req: any): string {
    return req.user;
  }
}
