import { Column, Entity } from "typeorm";
import { BaseEntity } from '../base.entity';



@Entity('companies')
export class CompanyEntity extends BaseEntity {
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;
    @Column({ type: 'varchar', length: 100, nullable: true })
    domain: string;
    @Column({ type: 'text', nullable: false, default: null })
    description: string
}