import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Ad } from "./ad";
import { validate as validateEntity, IsNotEmpty } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @IsNotEmpty({ message: "Le nom de la catégorie ne peut pas être vide" })
  @Field()
  name!: string;

  @Field(() => [Ad])
  @OneToMany(() => Ad, (ad: Ad) => ad.category)
  ads!: Ad[];

  async validate(): Promise<string[]> {
    const errors = await validateEntity(this);
    return errors.map((error) =>
      Object.values(error.constraints || {}).join(", ")
    );
  }
}
