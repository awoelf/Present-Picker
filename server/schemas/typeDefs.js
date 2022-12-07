//TODO: EDIT -- copied from 21.26 schemas/typeDefs.js
const { gql } = require('apollo-server-express');

// TODO: update with models once complete
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }
  # TODO: update for list once complete
  type List {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }
  # TODO: use if there is a subdocument of list or 3rd model
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

# TODO: references resolvers -- update as needed from models
  type Query {
    users: [User]
    user(username: String!): User
    lists(username: String): [List]
    list(listId: ID!): List
    me: User
  }
# TODO: references resolvers -- update as needed from models
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addList(listText: String!): List
    removeList(listId: ID!): List
  }
`;

module.exports = typeDefs;
