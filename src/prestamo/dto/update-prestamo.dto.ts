/* import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestamoDto } from './create-prestamo.dto';

export class UpdatePrestamoDto extends PartialType(CreatePrestamoDto) {} */

import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdatePrestamoDto {
  @IsUUID()
  @IsOptional()
  readonly id_prestamo?: string;

  @IsString()
  @IsOptional()
  readonly fecha_prestamo?: string;

  @IsString()
  @IsOptional()
  readonly fecha_devolucion?: string;

  @IsString()
  @IsOptional()
  readonly nombre_prestatario?: string;
}
