import { Coleccion } from 'src/coleccion/entities/coleccion.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Prestamos')
export class Prestamo {
  @PrimaryGeneratedColumn('uuid')
  id_prestamo: string;

  @Column({ length: 50 })
  fecha_prestamo: string;

  @Column({ length: 50 })
  fecha_devolucion: string;

  @Column({ length: 50 })
  nombre_prestatario: string;

  @ManyToOne(() => Coleccion, (coleccion) => coleccion.prestamos)
  coleccion_libros: Coleccion;
}
