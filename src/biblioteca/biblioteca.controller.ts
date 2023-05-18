import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';

@Controller('biblioteca')
export class BibliotecaController {
  constructor(private readonly bibliotecaService: BibliotecaService) {}

  @Post()
  async create(@Body() createBibliotecaDto: CreateBibliotecaDto) {
    return await this.bibliotecaService.create(createBibliotecaDto);
  }

  @Get()
  async findAll() {
    return await this.bibliotecaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return await this.bibliotecaService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBibliotecaDto: UpdateBibliotecaDto,
  ) {
    return await this.bibliotecaService.update(id, updateBibliotecaDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.bibliotecaService.remove(id);
  }
}
