import { IsString, IsNumber } from 'class-validator';

export class CreateColeccionDto {
  @IsString()
  estante_id: string;
  @IsString()
  titulo: string;
  @IsString()
  autor: string;
  @IsString()
  editorial: string;
  @IsNumber()
  anio_publicacion: number;
  @IsString()
  genero: string;
}
