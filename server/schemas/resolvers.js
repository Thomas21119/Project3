const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (
      parent,
      { type, name, description, repeat, time },
      context
    ) => {
      if (context.user) {
        console.log(context);
        const event = await Event.create({
          type,
          name,
          description,
          repeat,
          time,
          userId: context.user._id,
        });
      }
    },
  },
};

module.exports = resolvers;
