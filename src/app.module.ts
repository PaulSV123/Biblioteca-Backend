import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstanteriaModule } from './estanteria/estanteria.module';
import { ColeccionModule } from './coleccion/coleccion.module';
import { DesarcargasModule } from './desarcargas/desarcargas.module';
import { SeccionModule } from './seccion/seccion.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { Biblioteca } from './biblioteca/entities/biblioteca.entity';
import { Seccion } from './seccion/entities/seccion.entity';
import { Estanteria } from './estanteria/entities/estanteria.entity';
import { Coleccion } from './coleccion/entities/coleccion.entity';
import { Prestamo } from './prestamo/entities/prestamo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'masterkill',
      database: 'biblioteca',
      entities: [Biblioteca, Seccion, Estanteria, Coleccion, Prestamo],
      synchronize: true,
    }),
    BibliotecaModule,
    SeccionModule,
    EstanteriaModule,
    ColeccionModule,
    PrestamoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
