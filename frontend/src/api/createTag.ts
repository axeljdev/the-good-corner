import { gql } from "../gql";

export const CREATE_TAG = gql(`
  mutation createTag($data: TagCreateInput!) {
    createTag(data: $data) {
      id
      name
    }
  }
`);
