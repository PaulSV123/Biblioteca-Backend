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
import { EstanteriaService } from './estanteria.service';
import { CreateEstanteriaDto } from './dto/create-estanteria.dto';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';

@Controller('estanteria')
export class EstanteriaController {
  constructor(private readonly estanteriaService: EstanteriaService) {}

  @Post()
  async create(@Body() createEstanteriaDto: CreateEstanteriaDto) {
    return await this.estanteriaService.create(createEstanteriaDto);
  }

  @Get()
  async findAll() {
    return await this.estanteriaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.estanteriaService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEstanteriaDto: UpdateEstanteriaDto,
  ) {
    return await this.estanteriaService.update(id, updateEstanteriaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.estanteriaService.remove(id);
  }
}
