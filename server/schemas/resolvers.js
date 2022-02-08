const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ email });
    },
    events: async () => {
      return Event.find();
    },
    userEvents: async (root, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('events');
      } else {
        throw new AuthenticationError('You need to be logged in!');
      }
    },
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (root, { email, password }) => {
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
      root,
      {
        eventType,
        eventName,
        eventDescription,
        eventRepeating,
        eventYear,
        eventMonth,
        eventDay,
        eventHour,
        eventMinute,
      },
      context
    ) => {
      if (context.user) {
        const event = await Event.create({
          eventType,
          eventName,
          eventDescription,
          eventRepeating,
          eventYear,
          eventMonth,
          eventDay,
          eventHour,
          eventMinute,
          userId: context.user._id,
        });
        await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          { $addToSet: { events: event._id } }
        );
        return event;
      } else {
        throw new AuthenticationError('Incorrect credentials');
      }
    },
  },
};

module.exports = resolvers;
