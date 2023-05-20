import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { Biblioteca } from './entities/biblioteca.entity';

@Injectable()
export class BibliotecaService {
  constructor(
    @InjectRepository(Biblioteca)
    private readonly BibliotecaRepository: Repository<Biblioteca>,
  ) {}

  async create(createBibliotecaDto: CreateBibliotecaDto) {
    const create_biblioteca = this.BibliotecaRepository.create({
      id_biblioteca: uuid(),
      nombre: createBibliotecaDto.nombre,
      direccion: createBibliotecaDto.direccion,
      telefono: createBibliotecaDto.telefono,
      horario_apertura: createBibliotecaDto.horario_apertura,
      horario_cierre: createBibliotecaDto.horario_cierre,
    });
    const detalle_factura_new = await this.BibliotecaRepository.save(
      create_biblioteca,
    );
    return detalle_factura_new;
  }

  async findAll() {
    return await this.BibliotecaRepository.find();
  }

  async findOne(id: string): Promise<Biblioteca> {
    const biblioteca = await this.BibliotecaRepository.findOne({
      where: {
        id_biblioteca: id,
      },
    });
    if (!biblioteca)
      throw new NotFoundException(`Biblioteca details ${id} not found)`);
    return biblioteca;
  }

  async update(id: string, updateBibliotecaDto: UpdateBibliotecaDto) {
    return await this.BibliotecaRepository.update(id, updateBibliotecaDto);
  }

  async remove(id: string) {
    return await this.BibliotecaRepository.delete(id);
  }
}
