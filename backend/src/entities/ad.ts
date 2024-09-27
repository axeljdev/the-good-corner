import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Category } from './category';

@Entity()
export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description! : string;

    @Column()
    owner! : string;

    @Column()
    price!: number;

    @Column()

    picture!: string;

    @Column()
    location!: string;

    @Column()
    createdAt!: Date;

    @ManyToOne(() => Category, (category: Category) => category.ad)
    category_id!: Category;
}