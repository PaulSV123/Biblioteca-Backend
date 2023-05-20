import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColeccionModule } from 'src/coleccion/coleccion.module';
import { Prestamo } from './entities/prestamo.entity';

@Module({
  controllers: [PrestamoController],
  providers: [PrestamoService],
  imports: [TypeOrmModule.forFeature([Prestamo]), ColeccionModule],
  exports: [PrestamoService],
})
export class PrestamoModule {}
