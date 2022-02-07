// input inputEvent {
//   _id: ID!
//   eventType: String
//   eventName: String
//   eventDescription: String
//   eventRepeating: String
//   eventTime: String
//   userId: String
// }
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Classes {
    _id: ID
    name: String
    quantity: Int
  }

  type Event {
    _id: ID!
    eventType: String
    eventName: String
    eventDescription: String
    eventRepeating: String
    eventTime: String
    userId: String
  }

  type User {
    _id: ID
    email: String
    password: String
    events: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    events: [Event]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(
      eventType: String
      eventName: String
      eventDescription: String
      eventRepeating: String
      eventTime: String
    ): Event
  }
`;

module.exports = typeDefs;
