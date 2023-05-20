import { Estanteria } from 'src/estanteria/entities/estanteria.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Libros')
export class Coleccion {
  @PrimaryGeneratedColumn('uuid')
  id_libro: string;

  @Column({ length: 50 })
  titulo: string;

  @Column({ length: 50 })
  autor: string;

  @Column({ length: 50 })
  editorial: string;

  @Column({ type: 'integer' })
  anio_publicacion: number;

  @Column({ length: 50 })
  genero: string;

  @ManyToOne(() => Estanteria, (estanteria) => estanteria.libros)
  estanteria_general: Estanteria;

  @OneToMany(() => Prestamo, (prestamos) => prestamos.coleccion_libros)
  prestamos: Prestamo;
}
