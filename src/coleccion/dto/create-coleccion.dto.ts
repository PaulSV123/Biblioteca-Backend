import { IsNumber, IsString } from 'class-validator';

export class CreateColeccionDto {
  @IsString()
  estante_id: string;
  @IsString()
  nombre: string;
  @IsNumber()
  capacidad: number;
}
