import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesarcargasService } from './desarcargas.service';
import { CreateDesarcargasDto } from './dto/create-desarcargas.dto';
import { UpdateDesarcargasDto } from './dto/update-desarcargas.dto';

@Controller('desarcargas')
export class DesarcargasController {
  constructor(private readonly desarcargasService: DesarcargasService) {}

  @Post()
  create(@Body() createDesarcargasDto: CreateDesarcargasDto) {
    return this.desarcargasService.create(createDesarcargasDto);
  }

  @Get()
  findAll() {
    return this.desarcargasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.desarcargasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDesarcargasDto: UpdateDesarcargasDto) {
    return this.desarcargasService.update(+id, updateDesarcargasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.desarcargasService.remove(+id);
  }
}
