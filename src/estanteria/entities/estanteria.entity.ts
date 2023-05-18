import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Estanteria')
export class Estanteria {
  @PrimaryGeneratedColumn('uuid')
  id_estante: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ type: 'integer' })
  capacidad: number;
}
