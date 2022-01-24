import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import exp from 'constants';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from '../services/companies.service';
import { CompanyEntity } from '../company.entity';

const mockCompany = {
  cid: 'Success company',
  body: 'spies of the old age',
};

const mockResponse = {
  success: 'got success',
};

describe('CompaniesController', () => {
  let controller: CompaniesController;
  let service: CompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        CompaniesService,
        {
          provide: getRepositoryToken(CompanyEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(mockCompany),
            find: jest.fn().mockResolvedValue(mockCompany),
          },
        },
      ],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
    service = module.get<CompaniesService>(CompaniesService);
  });

  it('Company controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Company service should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a create Comp function', () => {
    expect(typeof controller.create).toBe('function');
  });

  it('test create user', async () => {
    jest.spyOn(service, 'createCompany').mockResolvedValueOnce(mockResponse);
    expect(await controller.create(mockCompany)).toBe(mockResponse);
  });
});
