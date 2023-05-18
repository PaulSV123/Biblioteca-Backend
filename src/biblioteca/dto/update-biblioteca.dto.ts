/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBibliotecaDto } from './create-biblioteca.dto';

export class UpdateBibliotecaDto extends PartialType(CreateBibliotecaDto) {} */

import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBibliotecaDto {
  @IsUUID()
  @IsOptional()
  readonly id_biblioteca?: string;

  @IsString()
  @IsOptional()
  readonly nombre?: string;

  @IsString()
  @IsOptional()
  readonly direccion?: string;

  @IsNumber()
  @IsOptional()
  readonly telefono?: number;

  @IsString()
  @IsOptional()
  readonly horario_apertura?: string;

  @IsString()
  @IsOptional()
  readonly horario_cierre?: string;
}
