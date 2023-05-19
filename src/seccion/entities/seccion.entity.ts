import { Biblioteca } from 'src/biblioteca/entities/biblioteca.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Secciones')
export class Seccion {
  @PrimaryGeneratedColumn('uuid')
  id_seccion: string;

  @Column({ length: 50 })
  nombre: string;

  @ManyToOne(() => Biblioteca, (seccion) => seccion.secciones)
  general: Biblioteca;
}
