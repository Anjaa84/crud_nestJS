import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CompaniesService } from '../services/companies.service';
import { CompanyDTO } from '../dtos/company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Post()
  async create(@Body() companyDTO: CompanyDTO) {
    return this.companiesService.createCompany(companyDTO);
  }

  @Get()
  findAll() {
    return this.companiesService.findAllCompanies();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() companyDTO: CompanyDTO,
  ): Observable<UpdateResult> {
    return this.companiesService.updatePost(id, companyDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.companiesService.deletePost(id);
  }
}
