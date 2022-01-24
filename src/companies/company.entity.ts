import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  cid: string;
  @Column({ default: '' })
  body: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
