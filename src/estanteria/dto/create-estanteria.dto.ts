import { IsNumber, IsString } from 'class-validator';

export class CreateEstanteriaDto {
  @IsString()
  seccion_id: string;
  @IsString()
  nombre: string;
  @IsNumber()
  capacidad: number;
}
