import { Injectable } from '@nestjs/common';
import { CreateEstanteriaDto } from './dto/create-estanteria.dto';
import { UpdateEstanteriaDto } from './dto/update-estanteria.dto';

@Injectable()
export class EstanteriaService {
  create(createEstanteriaDto: CreateEstanteriaDto) {
    return 'This action adds a new estanteria';
  }

  findAll() {
    return `This action returns all estanteria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estanteria`;
  }

  update(id: number, updateEstanteriaDto: UpdateEstanteriaDto) {
    return `This action updates a #${id} estanteria`;
  }

  remove(id: number) {
    return `This action removes a #${id} estanteria`;
  }
}
