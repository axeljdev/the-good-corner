import { gql } from "@apollo/client";

export const GET_AD = gql`
  query Query($adId: ID!) {
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
`;
