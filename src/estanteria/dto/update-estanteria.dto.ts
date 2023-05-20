/* import { PartialType } from '@nestjs/mapped-types';
import { CreateEstanteriaDto } from './create-estanteria.dto';

export class UpdateEstanteriaDto extends PartialType(CreateEstanteriaDto) {} */

import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateEstanteriaDto {
  @IsUUID()
  @IsOptional()
  readonly id_estante?: string;

  @IsString()
  @IsOptional()
  readonly nombre?: string;

  @IsNumber()
  @IsOptional()
  capacidad: number;
}
