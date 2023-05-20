import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateColeccionDto } from './dto/create-coleccion.dto';
import { UpdateColeccionDto } from './dto/update-coleccion.dto';
import { Coleccion } from './entities/coleccion.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { EstanteriaService } from 'src/estanteria/estanteria.service';

@Injectable()
export class ColeccionService {
  constructor(
    @InjectRepository(Coleccion)
    private readonly ColeccionRepository: Repository<Coleccion>,
    private readonly EstanteriaGeneralService: EstanteriaService,
  ) {}
  async create(createColeccionDto: CreateColeccionDto) {
    const libros_general = await this.EstanteriaGeneralService.findOne(
      createColeccionDto.estante_id,
    );
    const create_libros_body = this.ColeccionRepository.create({
      id_libro: uuid(),
      titulo: createColeccionDto.titulo,
      autor: createColeccionDto.autor,
      editorial: createColeccionDto.editorial,
      anio_publicacion: createColeccionDto.anio_publicacion,
      genero: createColeccionDto.genero,
      estanteria_general: libros_general,
    });
    const create_libros = await this.ColeccionRepository.save(
      create_libros_body,
    );
    return create_libros;
  }

  async findAll() {
    return await this.ColeccionRepository.find();
  }

  async findOne(id: string) {
    const libros = await this.ColeccionRepository.findOne({
      where: {
        id_libro: id,
      },
    });
    if (!libros)
      throw new NotFoundException(`Coleccion details ${id} not found)`);
    return libros;
  }

  async update(id: string, updateColeccionDto: UpdateColeccionDto) {
    return await this.ColeccionRepository.update(id, updateColeccionDto);
  }

  async remove(id: string) {
    return await this.ColeccionRepository.delete(id);
  }
}
