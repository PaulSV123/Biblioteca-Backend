import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateSeccionDto } from './dto/create-seccion.dto';
import { UpdateSeccionDto } from './dto/update-seccion.dto';
import { Seccion } from './entities/seccion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { BibliotecaService } from 'src/biblioteca/biblioteca.service';

@Injectable()
export class SeccionService {
  constructor(
    @InjectRepository(Seccion)
    private readonly SeccionRepository: Repository<Seccion>,
    private readonly BiblioteGeneralcaService: BibliotecaService,
  ) {}

  async create(createSeccionDto: CreateSeccionDto) {
    const biblioteca_general = await this.BiblioteGeneralcaService.findOne(
      createSeccionDto.biblioteca_id,
    );
    const create_seccion_body = this.SeccionRepository.create({
      id_seccion: uuid(),
      nombre: createSeccionDto.nombre,
      general: biblioteca_general,
    });
    const create_seccion = await this.SeccionRepository.save(
      create_seccion_body,
    );
    return create_seccion;
  }

  async findAll() {
    return await this.SeccionRepository.find();
  }

  async findOne(id: string): Promise<Seccion> {
    const biblioteca = await this.SeccionRepository.findOne({
      where: {
        id_seccion: id,
      },
    });
    if (!biblioteca)
      throw new NotFoundException(`Seccion details ${id} not found)`);
    return biblioteca;
  }

  async update(id: string, updateSeccionDto: UpdateSeccionDto) {
    return await this.SeccionRepository.update(id, updateSeccionDto);
  }

  async remove(id: string) {
    return await this.SeccionRepository.delete(id);
  }
}
