import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany } from 'typeorm';
import { Ad } from './ad';

@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
    
    @ManyToMany(() => Ad, (ad: Ad) => ad.tags)
    ads!: Ad[];
}