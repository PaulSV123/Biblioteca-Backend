import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstanteriaService } from './estanteria.service';
import { CreateEstanteriaDto } from './dto/create-estanteria.dto';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';

@Controller('estanteria')
export class EstanteriaController {
  constructor(private readonly estanteriaService: EstanteriaService) {}

  @Post()
  create(@Body() createEstanteriaDto: CreateEstanteriaDto) {
    return this.estanteriaService.create(createEstanteriaDto);
  }

  @Get()
  findAll() {
    return this.estanteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estanteriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstanteriaDto: UpdateEstanteriaDto) {
    return this.estanteriaService.update(+id, updateEstanteriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estanteriaService.remove(+id);
  }
}
