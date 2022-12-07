//referenced lesson 21.26 -- edited to match models
const { AuthenticationError } = require('apollo-server-express');
const { User, List, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('users');
    },
    user: async (parent, { email }) => {
    return User.findOne({ email }).populate('user');
    },
    lists: async (parent, { email }) => {
    const params = email ? { email } : {};
    return List.find(params);
    // .sort({ createdAt: -1 }) removed from after params above
    },
    list: async (parent, { listId }) => {
      return List.findOne({ _id: listId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
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
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addList: async (parent, { listText }, context) => {
      if (context.user) {
        const list = await List.create({
          listText,
          email: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { list: list._id } }
        );

        return list;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addItem: async (parent, { listId, itemText }, context) => {
      if (context.user) {
        return List.findOneAndUpdate(
          { _id: listId },
          {$addToSet: {
              items: { itemText, email: context.user.email }}},
          {new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeList: async (parent, { listId }, context) => {
      if (context.user) {
        const list = await list.findOneAndDelete({
          _id: listId,
          email: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { lists: list._id } },
          { new: true }
        );

        return list;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeItem: async (parent, { listId, itemId }, context) => {
      if (context.user) {
        return List.findOneAndUpdate(
          { _id: listId },
          {$pull: { items: { _id: itemId,
            email: context.user.email }}},
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
  },
};

module.exports = resolvers;
