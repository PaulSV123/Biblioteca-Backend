import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { CreateColeccionDto } from './dto/create-coleccion.dto';
import { UpdateColeccionDto } from './dto/update-coleccion.dto';

@Controller('coleccion')
export class ColeccionController {
  constructor(private readonly coleccionService: ColeccionService) {}

  @Post()
  create(@Body() createColeccionDto: CreateColeccionDto) {
    return this.coleccionService.create(createColeccionDto);
  }

  @Get()
  findAll() {
    return this.coleccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coleccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColeccionDto: UpdateColeccionDto) {
    return this.coleccionService.update(+id, updateColeccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coleccionService.remove(+id);
  }
}
