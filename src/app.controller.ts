import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('server')
  getServerInfo() {
    return this.appService.getServerInfo();
  }

  @Get('my')
  getMyInfo() {
    return this.appService.getMyInfo();
  }
}
