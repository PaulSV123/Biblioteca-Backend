import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ length: 50 })
  anio_publicacion: string;

  @Column({ length: 50 })
  genero: string;
}
