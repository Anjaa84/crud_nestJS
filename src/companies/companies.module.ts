import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';
import { CompanyEntity } from './company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity])

  ],

  controllers: [CompaniesController],
  providers: [CompaniesService],

})
export class CompaniesModule { }
