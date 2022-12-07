import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
  mutation addUser( $email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_LIST = gql`
  mutation addList($listText: String!) {
    addList(listText: $listText) {
      _id
      listText
      email
      items {
        _id
        itemText
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($listId: ID!, $itemText: String!) {
    addItem(listId: $listId, itemText: $itemText) {
      _id
      listText
      email
      items {
        _id
        itemText
      }
    }
  }
`;
