import { Module } from '@nestjs/common';
import { EstanteriaService } from './estanteria.service';
import { EstanteriaController } from './estanteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Estanteria } from './entities/estanteria.entity';
import { SeccionModule } from 'src/seccion/seccion.module';

@Module({
  controllers: [EstanteriaController],
  providers: [EstanteriaService],
  imports: [TypeOrmModule.forFeature([Estanteria]), SeccionModule],
  exports: [EstanteriaService],
})
export class EstanteriaModule {}
