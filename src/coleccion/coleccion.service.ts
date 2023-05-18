import { Injectable } from '@nestjs/common';
import { CreateColeccionDto } from './dto/create-coleccion.dto';
import { UpdateColeccionDto } from './dto/update-coleccion.dto';

@Injectable()
export class ColeccionService {
  create(createColeccionDto: CreateColeccionDto) {
    return 'This action adds a new coleccion';
  }

  findAll() {
    return `This action returns all coleccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coleccion`;
  }

  update(id: number, updateColeccionDto: UpdateColeccionDto) {
    return `This action updates a #${id} coleccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} coleccion`;
  }
}
