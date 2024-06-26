import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { DatabaseModule } from '../database/database.module';
import { CategoriesModule } from './categories.module';
import { SettingsModule } from '../settings/settings.module';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SettingsModule.forRoot(), DatabaseModule, CategoriesModule],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
