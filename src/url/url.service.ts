import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UrlService {
  constructor(private prisma: PrismaService) {}

  async create(createUrlDto: Prisma.UrlCreateInput) {
    return await this.prisma.url.create({ data: createUrlDto });
  }

  async findOne(url: string) {
    return await this.prisma.url.findUnique({ where: { newUrl: url } });
  }
}
