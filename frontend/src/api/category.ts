import { gql } from "../gql";

export const GET_CATEGORY = gql(`
  query category($categoryId: ID!) {
    category(id: $categoryId) {
      id
      name
      ads {
        id
        tags {
          name
          id
        }
        title
        description
        location
        owner
        price
        picture
        createdAt
      }
    }
  }
`);
