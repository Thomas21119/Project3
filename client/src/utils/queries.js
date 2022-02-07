import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      password
    }
  }
`;

export const QUERY_EVENTS = gql`
  query allEvents {
    events {
      _id
      eventName
      eventType
      eventDescription
      eventRepeating
    }
  }
`;
