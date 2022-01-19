import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    desc: string;
    @Column()
    price: number;

}