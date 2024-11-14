import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Ad, CreateAdInput, UpdateAdInput } from "../entities/ad";
import { validate } from "class-validator";

@Resolver()
export class AdsResolver {
  @Query(() => [Ad])
  async ads(
    @Arg("categoryId", { nullable: true }) categoryId?: number
  ): Promise<Ad[]> {
    const ads = categoryId
      ? await Ad.find({
          where: { category: { id: categoryId } },
          relations: {
            category: true,
            tags: true,
          },
        })
      : await Ad.find({
          relations: {
            category: true,
            tags: true,
          },
        });
    return ads;
  }

  @Query(() => Ad, { nullable: true })
  async ad(@Arg("id") id: number): Promise<Ad | null> {
    const ad = await Ad.findOne({
      where: { id },
      relations: {
        category: true,
        tags: true,
      },
    });
    return ad;
  }

  @Mutation(() => Ad)
  async createAd(@Arg("data") data: CreateAdInput): Promise<Ad> {
    const newAd = new Ad();
    Object.assign(newAd, data);
    const errors = await validate(newAd);
    if (errors.length) {
      throw new Error(JSON.stringify(errors));
    }
    await newAd.save();
    return newAd;
  }

  @Mutation(() => Ad, { nullable: true })
  async deleteAd(@Arg("id") id: number): Promise<Ad | null> {
    const ad = await Ad.findOneBy({ id });
    if (ad !== null) {
      await ad.remove();
      return ad;
    } else {
      return null;
    }
  }

  @Mutation(() => Ad, { nullable: true })
  async updateAd(
    @Arg("id") id: number,
    @Arg("data") data: UpdateAdInput
  ): Promise<Ad | null> {
    const ad = await Ad.findOneBy({ id });
    if (ad !== null) {
      Object.assign(ad, data);
      const errors = await validate(ad);
      if (errors.length) {
        throw new Error(JSON.stringify(errors));
      }
      await ad.save();
      return ad;
    } else {
      return null;
    }
  }
}
