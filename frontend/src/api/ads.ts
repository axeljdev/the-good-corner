import { gql } from "../gql";

export const GET_ADS = gql(`
  query ads {
    ads {
      id
      title
      description
      owner
      price
      picture
      location
      createdAt
      tags {
        id
        name
      }
      category {
        id
        name
      }
    }
  }
`);
