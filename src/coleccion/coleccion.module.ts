import { Module } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { ColeccionController } from './coleccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coleccion } from './entities/coleccion.entity';
import { EstanteriaModule } from 'src/estanteria/estanteria.module';

@Module({
  controllers: [ColeccionController],
  providers: [ColeccionService],
  imports: [TypeOrmModule.forFeature([Coleccion]), EstanteriaModule],
  exports: [ColeccionService],
})
export class ColeccionModule {}
