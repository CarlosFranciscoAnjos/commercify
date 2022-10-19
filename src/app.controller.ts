import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalGuard } from './auth/local.guard';
import { LoginDto } from './auth/login.dto';

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
  @UseGuards(AuthenticatedGuard)
  @ApiOkResponse()
  getStatus(): string {
    return this.appService.getStatus();
  }

  @Post('api/v1/login')
  @UseGuards(LocalGuard)
  @ApiOkResponse()
  login(@Body() loginDto: LoginDto): object {
    return this.appService.logIn(loginDto);
  }

  @Get('api/v1/userpage')
  @UseGuards(AuthenticatedGuard)
  @ApiOkResponse()
  getUserpage(@Request() req: any): object {
    return this.appService.getUserpage(req.user);
  }
}
