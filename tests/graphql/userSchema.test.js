const { ApolloServer } = require('apollo-server-express');
const chai = require('chai');
const expect = chai.expect;

const typeDefs = require('../../src/graphql/schema');
const resolvers = require('../../src/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

describe('User GraphQL Schema', () => {
  it('fetches user by id', async () => {
    const res = await server.executeOperation({
      query: `
        query {
          user(id: 1) {
            id
            name
          }
        }
      `
    });
    expect(res.data.user).to.have.property('id');
    expect(res.data.user).to.have.property('name');
  });
});