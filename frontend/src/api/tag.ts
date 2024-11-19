import { gql } from "../gql";

export const GET_TAG = gql(`
  query tag($tagId: ID!) {
    tag(id: $tagId) {
      id
      name
    }
  }
`);
