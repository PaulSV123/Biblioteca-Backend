import { Module } from '@nestjs/common';
import { DesarcargasService } from './desarcargas.service';
import { DesarcargasController } from './desarcargas.controller';

@Module({
  controllers: [DesarcargasController],
  providers: [DesarcargasService]
})
export class DesarcargasModule {}
