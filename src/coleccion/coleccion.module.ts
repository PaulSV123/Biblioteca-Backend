import { Module } from '@nestjs/common';
import { ColeccionService } from './coleccion.service';
import { ColeccionController } from './coleccion.controller';

@Module({
  controllers: [ColeccionController],
  providers: [ColeccionService]
})
export class ColeccionModule {}
