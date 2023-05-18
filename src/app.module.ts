import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstanteriaModule } from './estanteria/estanteria.module';
import { ColeccionModule } from './coleccion/coleccion.module';
import { DesarcargasModule } from './desarcargas/desarcargas.module';
import { SeccionModule } from './seccion/seccion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'masterkill',
      database: 'postgres',
      entities: [EstanteriaModule, ColeccionModule, DesarcargasModule],
      synchronize: true,
    }),
    EstanteriaModule,
    ColeccionModule,
    DesarcargasModule,
    SeccionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
