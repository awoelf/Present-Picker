import { gql } from '@apollo/client';


//TODO: Password included under email, above lists??? reference models/user.js
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
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
//TODO plural vs singular list???
export const QUERY_LISTS = gql`
  query getLists {
    lists {
      _id
      listName
      listAuthor
      description
      theme
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
//TODO: find lists by id, name, author, desc, or theme???
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
