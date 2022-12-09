//removed duplicate from 15
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
      listName
      listAuthor
      items {
        _id
        itemName
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($listId: ID!, $itemName: String!) {
    addItem(listId: $listId, itemName: $itemName) {
      _id
      listName
      listAuthor
      items {
        _id
        itemName
      }
    }
  }
`;


//delete list

//delete item