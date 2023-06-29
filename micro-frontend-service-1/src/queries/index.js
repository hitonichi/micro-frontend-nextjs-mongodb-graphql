import { gql } from "@apollo/client";

export const ALL_NOTES = gql`
  query {
    allNotes {
      title
      content
    }
  }
`;

export const ADD_NOTE = gql`
  mutation addNote($title: String!, $content: String!) {
    addNote(title: $title, content: $content) {
      title
      content
    }
  }
`;
