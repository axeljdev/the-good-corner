import { gql } from "../gql";

export const CREATE_CATEGORY = gql(`
  mutation createCategory($data: CategoryCreateInput!) {
    createCategory(data: $data) {
      name
    }
  }
`);
