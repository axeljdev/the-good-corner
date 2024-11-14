import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/category";

@Resolver()
export class CategoriesResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    const categories = await Category.find({
      relations: {
        ads: true,
      },
    });
    return categories;
  }

  @Query(() => Category, { nullable: true })
  async category(@Arg("id") id: number): Promise<Category | null> {
    const category = await Category.findOne({
      where: { id },
      relations: {
        ads: true,
      },
    });
    return category;
  }

  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string): Promise<Category> {
    const category = new Category();
    category.name = name;

    const error = await category.validate();
    if (error && error.length > 0) {
      throw new Error(JSON.stringify(error));
    }

    await category.save();
    return category;
  }

  @Mutation(() => Category, { nullable: true })
  async deleteCategory(@Arg("id") id: number): Promise<Category | null> {
    const category = await Category.findOneBy({ id });
    if (category !== null) {
      await category.remove();
      return category;
    } else {
      return null;
    }
  }

  @Mutation(() => Category, { nullable: true })
  async updateCategory(
    @Arg("id") id: number,
    @Arg("name", { nullable: true }) name?: string
  ): Promise<Category | null> {
    const category = await Category.findOneBy({ id });
    if (category !== null) {
      if (name !== undefined) {
        category.name = name;
      }

      const error = await category.validate();
      if (error && error.length > 0) {
        throw new Error(JSON.stringify(error));
      }

      await category.save();
      return category;
    } else {
      return null;
    }
  }
}
