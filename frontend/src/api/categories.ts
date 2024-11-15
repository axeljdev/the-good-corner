import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      id
      name
    }
  }
`;

export const GET_CATEGORY = gql`
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
`;
