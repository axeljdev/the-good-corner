  export type AdsType = {
    id : number;
    title: string;
    description: string;
    price: number;
    owner: string;
    location: string;
    categoryId: number;
    picture: string;
    tags: TagsType[];
  };

  export type CategoriesType = {
    id: number;
    name: string;
  };

  export type TagsType = {
    id: number;
    name: string;
  };