import { Coleccion } from 'src/coleccion/entities/coleccion.entity';
import { Seccion } from 'src/seccion/entities/seccion.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Estanteria')
export class Estanteria {
  @PrimaryGeneratedColumn('uuid')
  id_estante: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ type: 'integer' })
  capacidad: number;

  @ManyToOne(() => Seccion, (seccion) => seccion.estanteria)
  seccion_general: Seccion;

  @OneToMany(() => Coleccion, (coleccion) => coleccion.estanteria_general)
  libros: Coleccion;
}
