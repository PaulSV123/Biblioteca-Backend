import { Test, TestingModule } from '@nestjs/testing';
import { DesarcargasService } from './desarcargas.service';

describe('DesarcargasService', () => {
  let service: DesarcargasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesarcargasService],
    }).compile();

    service = module.get<DesarcargasService>(DesarcargasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
