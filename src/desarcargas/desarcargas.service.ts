import { Injectable } from '@nestjs/common';
import { CreateDesarcargasDto } from './dto/create-desarcargas.dto';
import { UpdateDesarcargasDto } from './dto/update-desarcargas.dto';

@Injectable()
export class DesarcargasService {
  create(createDesarcargasDto: CreateDesarcargasDto) {
    return 'This action adds a new desarcargas';
  }

  findAll() {
    return `This action returns all desarcargas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desarcargas`;
  }

  update(id: number, updateDesarcargasDto: UpdateDesarcargasDto) {
    return `This action updates a #${id} desarcargas`;
  }

  remove(id: number) {
    return `This action removes a #${id} desarcargas`;
  }
}
