import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Tag } from "../entities/tag";

@Resolver()
export class TagsResolver {
  @Query(() => [Tag])
  async tags(): Promise<Tag[]> {
    return await Tag.find({
      relations: {
        ads: true,
      },
    });
  }

  @Query(() => Tag, { nullable: true })
  async tag(@Arg("id") id: number): Promise<Tag | null> {
    return await Tag.findOne({
      where: { id },
      relations: {
        ads: true,
      },
    });
  }

  @Mutation(() => Tag)
  async createTag(@Arg("name") name: string): Promise<Tag> {
    const newTag = new Tag();
    newTag.name = name;
    await newTag.save();
    return newTag;
  }

  @Mutation(() => Tag, { nullable: true })
  async deleteTag(@Arg("id") id: number): Promise<Tag | null> {
    const tag = await Tag.findOne({
      where: { id },
      relations: {
        ads: true,
      },
    });
    if (tag !== null) {
      await tag.remove();
      return tag;
    } else {
      return null;
    }
  }

  @Mutation(() => Tag, { nullable: true })
  async updateTag(
    @Arg("id") id: number,
    @Arg("name") name: string
  ): Promise<Tag | null> {
    const tag = await Tag.findOne({
      where: { id },
      relations: {
        ads: true,
      },
    });
    if (tag !== null) {
      tag.name = name;
      await tag.save();
      return tag;
    } else {
      return null;
    }
  }
}
