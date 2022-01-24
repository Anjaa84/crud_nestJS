import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from './company.entity'
import { Company } from './company.interface';
import { from, Observable } from 'rxjs';


@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(CompanyEntity)
        private companyRepository: Repository<CompanyEntity>,
    ) { }


    createCompany(company: Company):Observable<Company> {
        return from(this.companyRepository.save(company));

    }


}
