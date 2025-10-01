import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  NotFoundException,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Controller('')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async create(@Body() createUrlDto: CreateUrlDto) {
    const oldUrl = createUrlDto?.url;
    const newUrl = Math.random().toString(36).substring(2, 8);

    const foundUrl = await this.urlService.findOne(newUrl);

    if (foundUrl) {
      return this.create(createUrlDto);
    }

    return await this.urlService.create({ oldUrl, newUrl });
  }

  @Get(':url')
  @Redirect()
  async getDynamicRedirect(@Param('url') url: string) {
    const foundUrl = await this.urlService.findOne(url);

    if (!foundUrl) {
      throw new NotFoundException('URL not found');
    }

    return { url: `https://${foundUrl.oldUrl}`, statusCode: 302 };
  }
}
