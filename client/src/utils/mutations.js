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
  mutation addList($listName: String, $listAuthor: String!) {
  addList(listName: $listName, listAuthor: $listAuthor) {
    _id
    theme
    listName
    listAuthor
    description
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


//remove list
export const REMOVE_LIST = gql`
mutation removeList($listId: ID!) {
  removeList(listId: $listId) {
    _id
  }
}
`;

// remove item
export const REMOVE_ITEM = gql`
mutation removeItem($itemId: ID!, $listId: ID!) {
  removeItem(itemId: $itemId, listId: $listId) {
    _id
  }
}
`;

//update list
export const UPDATE_LIST = gql`
mutation updateList($listId: ID!, $listName: String!) {
  updateList(listId: $listId, listName: $listName) {
    _id
    listName
    description
    listAuthor
    theme
    items {
      _id
      itemName
    }
  }
}
`;

//update item
export const UPDATE_ITEM = gql`
mutation UpdateItem($itemId: ID!, $itemName: String!, $price: Int!) {
  updateItem(itemId: $itemId, itemName: $itemName, price: $price) {
    _id
    listName
    items {
      _id
      itemName
      price
      authorName
      color
      details
      image
      link
      quantity
      retailer
      size
    }
  }
}
`;