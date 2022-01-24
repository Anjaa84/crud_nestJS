import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import exp from 'constants';
import { Repository } from 'typeorm';
import { CompaniesService } from './companies.service';
import { CompanyEntity } from '../company.entity';

const companyEntity = new CompanyEntity();
companyEntity.id = 2;
companyEntity.cid = 'C234';
companyEntity.body = 'Dull';

export const registeredMockeFactory = jest.fn(() => ({
  save: jest.fn(() => companyEntity),
  find: jest.fn(() => companyEntity),
  findOne: jest.fn(() => companyEntity),
}));

describe('Test companiesService', () => {
  let companyService: CompaniesService;
  let companyRepository: Repository<CompanyEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        CompanyEntity,
        {
          provide: getRepositoryToken(CompanyEntity),
          useClass: registeredMockeFactory,
        },
      ],
    }).compile();

    companyService = module.get<CompaniesService>(CompaniesService);
    companyRepository = module.get<Repository<CompanyEntity>>(
      getRepositoryToken(CompanyEntity),
    );
  });

  it('user service should be defined', () => {
    expect(companyService).toBeDefined();
  });

  it('user repository should be defined', () => {
    expect(companyRepository).toBeDefined();
  });

  it('createCompany should return success response', async () => {
    const mockResponse = {
      success: 'got success',
    };
    jest.spyOn(companyRepository, 'findOne').mockResolvedValueOnce(null);
    jest.spyOn(companyRepository, 'save').mockResolvedValueOnce(companyEntity);
    expect(await companyService.createCompany(companyEntity)).toEqual(
      mockResponse,
    );
  });

  it('test user with empty cid', async () => {
    companyEntity.cid = null;
    try {
      await companyService.createCompany(companyEntity);
    } catch (error) {
      expect(error.message).toBe('fail');
    }
  });
});
