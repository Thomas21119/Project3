import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      email
      password
      events {
        _id
        eventName
        eventType
        eventDescription
        eventRepeating
        eventYear
        eventMonth
        eventDay
        eventHour
        eventMinute
      }
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
      eventYear
      eventMonth
      eventDay
      eventHour
      eventMinute
    }
  }
`;

export const QUERY_USER_EVENTS = gql`
  query userEvents {
    user {
      events {
        _id
        email
        password
        events {
          _id
          eventName
          eventType
          eventDescription
          eventRepeating
          eventYear
          eventMonth
          eventDay
          eventHour
          eventMinute
        }
      }
    }
  }
`;
