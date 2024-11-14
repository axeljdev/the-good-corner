import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from "typeorm";
import { Ad } from "./ad";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @ManyToMany(() => Ad, (ad: Ad) => ad.tags)
  @Field(() => [Ad])
  ads!: Ad[];
}
