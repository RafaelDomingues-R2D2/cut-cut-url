import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, UrlModule],
})
export class AppModule {}
