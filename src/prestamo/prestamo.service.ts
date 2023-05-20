import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';
import { ColeccionService } from 'src/coleccion/coleccion.service';

@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly PrestamoRepository: Repository<Prestamo>,
    private readonly ColeccionGeneralService: ColeccionService,
  ) {}
  async create(createPrestamoDto: CreatePrestamoDto) {
    const prestamo_general = await this.ColeccionGeneralService.findOne(
      createPrestamoDto.libro_id,
    );
    const create_prestamo_body = this.PrestamoRepository.create({
      id_prestamo: uuid(),
      fecha_prestamo: createPrestamoDto.fecha_prestamo,
      fecha_devolucion: createPrestamoDto.fecha_devolucion,
      nombre_prestatario: createPrestamoDto.nombre_prestatario,
      coleccion_libros: prestamo_general,
    });
    const create_prestamo = await this.PrestamoRepository.save(
      create_prestamo_body,
    );
    return create_prestamo;
  }

  async findAll() {
    return await this.PrestamoRepository.find();
  }

  async findOne(id: string) {
    const prestamo = await this.PrestamoRepository.findOne({
      where: {
        id_prestamo: id,
      },
    });
    if (!prestamo)
      throw new NotFoundException(`Biblioteca details ${id} not found)`);
    return prestamo;
  }

  async update(id: string, updatePrestamoDto: UpdatePrestamoDto) {
    return await this.PrestamoRepository.update(id, updatePrestamoDto);
  }

  async remove(id: string) {
    return await this.PrestamoRepository.delete(id);
  }
}
