import { Module } from '@nestjs/common';
import { EstanteriaService } from './estanteria.service';
import { EstanteriaController } from './estanteria.controller';

@Module({
  controllers: [EstanteriaController],
  providers: [EstanteriaService]
})
export class EstanteriaModule {}
