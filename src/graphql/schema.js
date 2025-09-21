const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }
`;

module.exports = typeDefs;