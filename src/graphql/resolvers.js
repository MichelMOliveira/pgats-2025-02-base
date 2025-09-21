const resolvers = {
  Query: {
    user: (_, { id }) => ({ id, name: 'Test User' }),
  },
};

module.exports = resolvers;