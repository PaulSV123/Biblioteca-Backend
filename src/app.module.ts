import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstanteriaModule } from './estanteria/estanteria.module';
import { ColeccionModule } from './coleccion/coleccion.module';
import { DesarcargasModule } from './desarcargas/desarcargas.module';

@Module({
  imports: [EstanteriaModule, ColeccionModule, DesarcargasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
