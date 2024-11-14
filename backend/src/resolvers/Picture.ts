import { Mutation, Query, Resolver } from "type-graphql";
import { Picture } from "../entities/picture";

@Resolver()
export class PicturesResolver {
  @Query(() => [Picture])
  async pictures(): Promise<Picture[]> {
    return [];
  }

  @Mutation(() => Picture)
  async createPicture() {
    return null;
  }
}
