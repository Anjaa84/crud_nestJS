import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CompaniesService } from './companies.service';
import { Company } from './company.interface';

@Controller('companies')
export class CompaniesController {
   constructor(private companiesService: CompaniesService) { }

   @Post()
   create(@Body()  company:Company):Observable<Company>{
       return this.companiesService.createCompany(company);
   }
}
