import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as os from 'os';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getServerInfo() {
    const url = this.configService.get('URL');
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data;
  }

  getMyInfo() {
    return { hostname: os.hostname() };
  }
}
