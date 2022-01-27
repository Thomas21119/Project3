const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
    }
    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs