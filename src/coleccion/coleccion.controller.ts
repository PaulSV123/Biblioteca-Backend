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
import { ColeccionService } from './coleccion.service';
import { CreateColeccionDto } from './dto/create-coleccion.dto';
import { UpdateColeccionDto } from './dto/update-coleccion.dto';

@Controller('coleccion')
export class ColeccionController {
  constructor(private readonly coleccionService: ColeccionService) {}

  @Post()
  async create(@Body() createColeccionDto: CreateColeccionDto) {
    return await this.coleccionService.create(createColeccionDto);
  }

  @Get()
  async findAll() {
    return await this.coleccionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.coleccionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateColeccionDto: UpdateColeccionDto,
  ) {
    return await this.coleccionService.update(id, updateColeccionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.coleccionService.remove(id);
  }
}
