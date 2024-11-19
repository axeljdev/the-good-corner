import { gql } from "../gql";

export const CREATE_AD = gql(`
  mutation Mutation($data: AdCreateInput!) {
    createAd(data: $data) {
      createdAt
      category {
        name
        id
      }
      description
      id
      location
      owner
      picture
      price
      title
      tags {
        id
        name
      }
    }
  }
`);
