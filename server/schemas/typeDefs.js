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
    userId: String
    eventYear: Int
    eventMonth: Int
    eventDay: Int
    eventHour: Int
    eventMinute: Int
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
    userEvents: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(
      eventType: String
      eventName: String
      eventDescription: String
      eventRepeating: String
      eventYear: Int
      eventMonth: Int
      eventDay: Int
      eventHour: Int
      eventMinute: Int
    ): Event
  }
`;

module.exports = typeDefs;
