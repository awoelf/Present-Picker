import { gql } from '@apollo/client';


//TODO: Password included under email, above lists??? reference models/user.js
export const QUERY_USER = gql`
  user(email: $email) {
    _id
    email
    password
    lists {
      _id
      listName
      listAuthor
      description
      theme
      items {
        _id
        itemName
        authorName
        price
        retailer
        link
        quantity
        details
        size
        color
        image
      }
    }
  }
`;
export const QUERY_USERS = gql`
  query getUsers {
users {
  _id
  email
  password
  lists {
    _id
    listName
    listAuthor
    description
    theme
    items {
      itemName
      price
      retailer
      link
      quantity
      details
      size
      color
      image
    }
  }
}
  }
`;
export const QUERY_LISTS = gql`
  query getLists {
    lists {
    _id
    listName
    listAuthor
    description
    theme
    items {
      _id
      itemName
      price
      retailer
      link
      quantity
      details
      size
      color
      image
    }
  }
}
`;
//updated to match models/List.js and Item.js
export const QUERY_SINGLE_LIST = gql`
  query getSingleList($listId: ID!) {
    list(listId: $listId) {
      _id
      listName
      listAuthor
      description
      theme
      items {
        _id
        itemName
        price
        retailer
        link
        quantity
        size
        color
        details
        image
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
    _id
    email
    password
    lists {
      _id
      listName
      listAuthor
      description
      theme
    }

  }
  }
`;
