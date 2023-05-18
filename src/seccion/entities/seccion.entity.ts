import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Seccion')
export class Seccion {
  @PrimaryGeneratedColumn('uuid')
  id_seccion: string;

  @Column({ length: 50 })
  id_biblioteca: string;

  @Column({ length: 50 })
  nombre: string;
}
