import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ManyToOne, BeforeInsert } from "typeorm";
import { Length, Min, Max, IsUrl, IsEmail } from "class-validator";
import { Category } from "./category";
import { Tag } from "./tag";
import { ObjectType, Field, ID, Int, InputType } from "type-graphql";
import { IdInput } from "./Id";

@Entity()
@ObjectType()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Length(5, 50, { message: "Le titre doit être entre 5 et 50 caractères" })
  @Field()
  title!: string;

  @Column()
  @Field()
  description!: string;

  @Column()
  @IsEmail({}, { message: "L'email n'est pas valide" })
  @Field()
  owner!: string;

  @Column()
  @Min(0, { message: "Le prix ne peut pas être négatif" })
  @Max(1000000, { message: "Le prix ne peut pas être supérieur à 1 000 000" })
  @Field(() => Int)
  price!: number;

  @Column()
  @IsUrl({}, { message: "L'url de l'image n'est pas valide" })
  @Field()
  picture!: string;

  @Column()
  @Field()
  location!: string;

  @Column()
  @Field()
  createdAt!: Date;

  @BeforeInsert()
  private setCreatedAt() {
    this.createdAt = new Date();
  }

  @ManyToOne(() => Category, (category: Category) => category.ads, {
    eager: true,
  })
  @Field(() => Category)
  category!: Category;

  @ManyToMany(() => Tag, (tag: Tag) => tag.ads)
  @JoinTable()
  @Field(() => [Tag])
  tags!: Tag[];
}

@InputType()
export class UpdateAdInput {
  @Field(() => IdInput, { nullable: true })
  category!: IdInput;

  @Field(() => [IdInput], { nullable: true })
  tags!: IdInput[];

  @Length(10, 100, { message: "Title must be between 10 and 100 chars" })
  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  location!: string;

  @IsEmail()
  @Field({ nullable: true })
  owner!: string;

  @Min(0, { message: "Price must be positive" })
  @Max(1000000, { message: "Price must be lower than 1000000 cents" })
  @Field(() => Int, { nullable: true })
  price!: number;

  @IsUrl()
  @Field({ nullable: true })
  picture!: string;
}

@InputType()
export class CreateAdInput {
  @Field(() => IdInput)
  category!: IdInput;

  @Field(() => [IdInput])
  tags!: IdInput[];

  @Length(10, 100, { message: "Title must be between 10 and 100 chars" })
  @Field()
  title!: string;

  @Field({ nullable: true })
  description!: string;

  @Field()
  location!: string;

  @IsEmail()
  @Field()
  owner!: string;

  @Min(0, { message: "Price must be positive" })
  @Max(1000000, { message: "Price must be lower than 1000000 cents" })
  @Field(() => Int)
  price!: number;

  @IsUrl()
  @Field()
  picture!: string;
}
