import { PartialType } from '@nestjs/mapped-types';
import { CreateDesarcargasDto } from './create-desarcargas.dto';

export class UpdateDesarcargasDto extends PartialType(CreateDesarcargasDto) {}
