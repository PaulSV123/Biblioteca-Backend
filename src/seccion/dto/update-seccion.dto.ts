/* import { PartialType } from '@nestjs/mapped-types';
import { CreateSeccionDto } from './create-seccion.dto';

export class UpdateSeccionDto extends PartialType(CreateSeccionDto) {} */

import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateSeccionDto {
  @IsUUID()
  @IsOptional()
  readonly id_seccion?: string;

  @IsString()
  @IsOptional()
  readonly nombre?: string;
}
