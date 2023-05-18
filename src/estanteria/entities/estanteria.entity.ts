import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Estanteria')
export class Estanteria {
  @PrimaryGeneratedColumn('uuid')
  id_biblioteca: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  direccion: string;

  @Column({ type: 'integer' })
  telefono: number;

  @Column({ length: 50 })
  horario_apertura: string;

  @Column({ length: 50 })
  horario_cierre: string;
}
