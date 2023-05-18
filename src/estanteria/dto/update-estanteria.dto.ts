import { PartialType } from '@nestjs/mapped-types';
import { CreateEstanteriaDto } from './create-estanteria.dto';

export class UpdateEstanteriaDto extends PartialType(CreateEstanteriaDto) {}
