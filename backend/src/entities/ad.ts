import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BeforeInsert, JoinTable, ManyToMany } from 'typeorm';
import { Length, Min, Max, IsUrl, isEmail, IsEmail } from 'class-validator';
import { Category } from './category';
import { Tag } from './tag';

@Entity()
export class Ad extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @Length(5, 50, { message: "Le titre doit être entre 5 et 50 caractères" })
    title!: string;

    @Column()
    description! : string;

    @Column()
    @IsEmail({}, { message: "L'email n'est pas valide" })
    owner! : string;

    @Column()
    @Min(0, { message: "Le prix ne peut pas être négatif" })
    @Max(1000000, { message: "Le prix ne peut pas être supérieur à 1 000 000" })
    price!: number;

    @Column()
    @IsUrl({}, { message: "L'url de l'image n'est pas valide" })
    picture!: string;

    @Column()
    location!: string;

    @Column()
    createdAt!: Date;

    @BeforeInsert()
    private setCreatedAt() {
        {this.createdAt = new Date()}
    }

    @ManyToOne(() => Category, (category: Category) => category.ads)
    category!: Category;

    @ManyToMany(() => Tag, (tag: Tag) => tag.ads)
    @JoinTable()
    tags!: Tag[];
}