import { gql } from "../gql";

export const GET_AD = gql(`
  query ad($adId: ID!) {
    ad(id: $adId) {
      id
      category {
        name
        id
      }
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
`);
