import { gql } from "../gql";

export const GET_TAGS = gql(`
  query tags {
    tags {
      id
      name
    }
  }
`);
