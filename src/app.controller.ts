import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ServerInfoDto } from './serverInfo.dto';
import { ApiOperation } from '@nestjs/swagger';

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

  @Post('req')
  @ApiOperation({ summary: 'URL에 요청' })
  postServerInfo(@Body() url: ServerInfoDto) {
    return this.appService.postServerInfo(url);
  }
}
