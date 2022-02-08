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

export const ADD_EVENT = gql`
  mutation addEvent(
    $eventType: String!
    $eventName: String!
    $eventDescription: String!
    $eventRepeating: String!
    $eventYear: Int!
    $eventMonth: Int!
    $eventDay: Int!
    $eventHour: Int!
    $eventMinute: Int!
  ) {
    addEvent(
      eventType: $eventType
      eventName: $eventName
      eventDescription: $eventDescription
      eventRepeating: $eventRepeating
      eventYear: $eventYear
      eventMonth: $eventMonth
      eventDay: $eventDay
      eventHour: $eventHour
      eventMinute: $eventMinute
    ) {
      _id
      eventType
      eventName
      eventDescription
      eventRepeating
      eventYear
      eventMonth
      eventDay
      eventHour
      eventMinute
    }
  }
`;
