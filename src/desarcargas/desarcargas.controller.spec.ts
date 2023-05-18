import { Test, TestingModule } from '@nestjs/testing';
import { DesarcargasController } from './desarcargas.controller';
import { DesarcargasService } from './desarcargas.service';

describe('DesarcargasController', () => {
  let controller: DesarcargasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesarcargasController],
      providers: [DesarcargasService],
    }).compile();

    controller = module.get<DesarcargasController>(DesarcargasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
