import { gql } from "../gql";

export const UPDATE_AD = gql(`
  mutation updateAd($id: ID!, $data: AdUpdateInput!) {
    updateAd(id: $id, data: $data) {
      id
      title
      description
      price
      location
      picture
      owner
      category {
        id
        name
      }
      tags {
        id
        name
      }
    }
  }
`);
