import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CompanyEntity } from '../company.entity';
import { Company } from '../company.interface';
import { from, Observable } from 'rxjs';
import { CompanyDTO } from '../dtos/company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
  ) {}

  async createCompany(companyDTO: CompanyDTO) {
    const { cid, body } = companyDTO;

    try {
      if (cid) {
        const company = new CompanyEntity();
        company.cid = cid;
        company.body = body;

        const companyData = await this.companyRepository.findOne({
          cid: company.cid,
        });

        if (companyData) {
          throw new HttpException(
            { message: 'company exists' },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

        await this.companyRepository.save(company);
        return {
          success: 'got success',
        };
      } else {
        const fail = 'fail';
        throw new HttpException(fail, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch (error) {
      console.log('error');
    }
    // return from(this.companyRepository.save(company));
  }

  findAllCompanies(): Observable<Company[]> {
    return from(this.companyRepository.find());
  }

  updatePost(id: number, companyDTO: CompanyDTO): Observable<UpdateResult> {
    return from(this.companyRepository.update(id, companyDTO));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.companyRepository.delete(id));
  }
}
