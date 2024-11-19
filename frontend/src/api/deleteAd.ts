import { gql } from "../gql";

export const DELETE_AD = gql(`
  mutation deleteAd($id: ID!) {
    deleteAd(id: $id) {
      id
    }
  }
`);
