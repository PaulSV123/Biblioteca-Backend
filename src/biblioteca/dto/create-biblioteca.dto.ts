import { IsNumber, IsString } from 'class-validator';

export class CreateBibliotecaDto {
  @IsString()
  nombre: string;
  @IsString()
  direccion: string;
  @IsNumber()
  telefono: number;
  @IsString()
  horario_apertura: string;
  @IsString()
  horario_cierre: string;
}
