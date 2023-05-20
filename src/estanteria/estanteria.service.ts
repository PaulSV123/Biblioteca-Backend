import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateEstanteriaDto } from './dto/create-estanteria.dto';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';
import { Estanteria } from './entities/estanteria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeccionService } from 'src/seccion/seccion.service';

@Injectable()
export class EstanteriaService {
  constructor(
    @InjectRepository(Estanteria)
    private readonly EstanteriaRepository: Repository<Estanteria>,
    private readonly SeccionGeneralService: SeccionService,
  ) {}

  async create(createEstanteriaDto: CreateEstanteriaDto) {
    const estanteria_general = await this.SeccionGeneralService.findOne(
      createEstanteriaDto.seccion_id,
    );
    const create_estanteria_body = this.EstanteriaRepository.create({
      id_estante: uuid(),
      nombre: createEstanteriaDto.nombre,
      capacidad: createEstanteriaDto.capacidad,
      seccion_general: estanteria_general,
    });
    const create_estanteria = await this.EstanteriaRepository.save(
      create_estanteria_body,
    );
    return create_estanteria;
  }

  async findAll() {
    return await this.EstanteriaRepository.find();
  }

  async findOne(id: string) {
    const estanteria = await this.EstanteriaRepository.findOne({
      where: {
        id_estante: id,
      },
    });
    if (!estanteria)
      throw new NotFoundException(`Estanteria details ${id} not found)`);
    return estanteria;
  }

  async update(id: string, updateEstanteriaDto: UpdateEstanteriaDto) {
    return await this.EstanteriaRepository.update(id, updateEstanteriaDto);
  }

  async remove(id: string) {
    return await this.EstanteriaRepository.delete(id);
  }
}
