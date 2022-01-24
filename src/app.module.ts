import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { config } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot(config), CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
