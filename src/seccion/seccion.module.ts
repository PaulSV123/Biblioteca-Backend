import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seccion } from './entities/seccion.entity';

@Module({
  controllers: [SeccionController],
  providers: [SeccionService],
  imports: [TypeOrmModule.forFeature([Seccion])],
  exports: [SeccionService],
})
export class SeccionModule {}
