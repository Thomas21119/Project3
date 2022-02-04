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

// export const ADD_event = gql`
//   mutation addEvent($eventType: String!, $eventName: String!, $eventDescription, $eventRepeating: String!)
//     addEvent(eventType: $eventType, eventName: $eventName, eventDescription: $eventDescription, eventRepeating: $eventRepeating) {
//       _id
//       type
//       name
//       description
//       repeating
// }`;
