//copied from 21.26 schemas/typeDefs.js -- edited to match models
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    lists: [List]!
  }
  type List {
    _id: ID
    listName: String
    description: String
    theme: String
    items: [Item]!
  }
  type Item {
    _id: ID
    itemName: String
    price: Int
    retailer: String
    link: String
    quantity: Int
    details: String
    size: Int
    color: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    lists(email: String): [List]
    list(listId: ID!): List
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addList(listText: String!): List
    removeList(listId: ID!): List
  }
`;

module.exports = typeDefs;
