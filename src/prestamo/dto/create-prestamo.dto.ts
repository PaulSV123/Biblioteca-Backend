import { IsString } from 'class-validator';

export class CreatePrestamoDto {
  @IsString()
  libro_id: string;
  @IsString()
  fecha_prestamo: string;
  @IsString()
  fecha_devolucion: string;
  @IsString()
  nombre_prestatario: string;
}
