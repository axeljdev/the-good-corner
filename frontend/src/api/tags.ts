import { gql } from "@apollo/client";

export const GET_TAG = gql`
  query Query($tagId: ID!) {
    tag(id: $tagId) {
      id
      name
    }
  }
`;

export const GET_TAGS = gql`
  query Query {
    tags {
      id
      name
    }
  }
`;
