import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Prestamo {
  @PrimaryGeneratedColumn('uuid')
  id_prestamo: string;

  @Column({ length: 50 })
  fecha_prestamo: string;

  @Column({ length: 50 })
  fecha_devolucion: string;
}
