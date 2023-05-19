import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';

@Controller('seccion')
export class SeccionController {
  constructor(private readonly seccionService: SeccionService) {}

  @Post()
  async create(@Body() createSeccionDto: CreateSeccionDto) {
    return await this.seccionService.create(createSeccionDto);
  }

  @Get()
  async findAll() {
    return await this.seccionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.seccionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSeccionDto: UpdateSeccionDto,
  ) {
    return await this.seccionService.update(id, updateSeccionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.seccionService.remove(id);
  }
}
