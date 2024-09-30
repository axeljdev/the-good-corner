import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Ad } from './ad';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
    
    @OneToMany(() => Ad, (ad: Ad) => ad.category)
    ads!: Ad[];
}