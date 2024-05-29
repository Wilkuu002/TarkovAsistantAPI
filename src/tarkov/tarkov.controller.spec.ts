import { Test, TestingModule } from '@nestjs/testing';
import { TarkovController } from './tarkov.controller';

describe('TarkovController', () => {
  let controller: TarkovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarkovController],
    }).compile();

    controller = module.get<TarkovController>(TarkovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
