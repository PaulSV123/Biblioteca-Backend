/* import { PartialType } from '@nestjs/mapped-types';
import { CreateColeccionDto } from './create-coleccion.dto';

export class UpdateColeccionDto extends PartialType(CreateColeccionDto) {} */

import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateColeccionDto {
  @IsUUID()
  @IsOptional()
  readonly id_libro?: string;

  @IsString()
  @IsOptional()
  readonly titulo?: string;

  @IsString()
  @IsOptional()
  readonly autor?: string;

  @IsString()
  @IsOptional()
  readonly editorial?: string;

  @IsNumber()
  @IsOptional()
  readonly anio_publicacion?: number;

  @IsString()
  @IsOptional()
  readonly genero?: string;
}
