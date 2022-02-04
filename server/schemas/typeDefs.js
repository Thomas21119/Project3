const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Classes {
    _id: ID
    name: String
    quantity: Int
  }

  type Events {
    _id: ID
    type: String
    name: String
    description: String
    repeating: String
  }

  type User {
    _id: ID
    email: String
    password: String
    events: [Events]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    events: [Events]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(events: _id)
  }
`;

module.exports = typeDefs;
