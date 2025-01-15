import { ApiProperty } from '@nestjs/swagger';

export class ServerInfoDto {
  @ApiProperty({
    description: '요청할 URL',
    default: 'http://localhost:3000/my',
  })
  url: string;
}
