import { IsString } from 'class-validator';

export class CreateSeccionDto {
  @IsString()
  biblioteca_id: string;
  @IsString()
  nombre: string;
}
