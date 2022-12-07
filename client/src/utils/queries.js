import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      lists {
        _id
        listText
      }
    }
  }
`;

export const QUERY_LISTS = gql`
  query getLists {
    lists {
      _id
      listText
      email
    }
  }
`;

export const QUERY_SINGLE_LIST = gql`
  query getSingleList($listId: ID!) {
    list(listId: $listId) {
      _id
      listText
      email
      items {
        _id
        itemText
        email
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      lists {
        _id
        listText
        email
      }
    }
  }
`;
