//referenced lesson 21.26 -- edited to match models
const { AuthenticationError } = require('apollo-server-express');
const { User, List, Item } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('lists');
    },
    user: async (parent, { email }) => {
    return User.findOne({ email }).populate('lists');

    },
    lists: async (parent, { email }) => {
    const params = email ? { email } : {};
    console.log(params)
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

    addList: async (parent, { listName }, context) => {
      console.log("listName =", listName)
      if (context.user) {
        const list = await List.create({
          listName,
          listAuthor: context.user.email,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { list: list._id } }
        );

        return list;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addItem: async (parent, args, context) => {
      if (context.user) {
        return List.findOneAndUpdate(
          { _id: args.listId },
          {$addToSet: {
              items: { ...args, authorName: context.user.email }}},
          {new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeList: async (parent, { listId }, context) => {
      if (context.user) {
        console.log(context.user)
        const list = await List.findOne({
          _id: listId,
          listAuthor: context.user.email,
        });
        if (!list){
          throw new AuthenticationError('Wrong user');
        }
        await List.deleteOne({_id:list._id})
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
        const newList = await List.findOneAndUpdate(
          { _id: listId, authorName: context.user.email },
          {$pull: { items: { _id: itemId,}}},
          { new: true }
        );
        console.log(newList);
        return newList
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    //update a list

    updateList: async (parent, { listId, ...args }, context) => {
      if (context.user) {
        const updatedList = await List.findOneAndUpdate(
          {_id: listId},
          {$set:{
            listName: args.listName,
            listAuthor: args.listAuthor,
            description: args.description,
            theme: args.theme,}},
            { runValidators: true, new: true }
        );
      return updatedList;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

      //update an item
      // currently returns null
    updateItem: async (parent, { itemId, ...args }, context) => {
        if (context.user) {
          //if I use Item, an error occurs
          console.log(args.color);
          const updatedItem = await List.findOneAndUpdate(
            {"items._id": itemId},

            {$set:{
              "items.$.itemName": args.itemName,
              "items.$.price": args.price,
              "items.$.retailer": args.retailer,
              "items.$.link": args.link,
              "items.$.quantity": args.quantity,
              "items.$.size": args.size,
              "items.$.color": args.color,
              "items.$.details": args.details,
              "items.$.image": args.image,}},
              { runValidators: true, new: true }
          );
          console.log(updatedItem);
        return updatedItem;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  },

  
};

//referenced code from 18 homework
// updateThought(req, res) {
//   Thought.findOneAndUpdate(
//     { _id: req.params.thoughtId },
//     { $set: req.body },
//     { runValidators: true, new: true }
//   )
//     .then((thought) =>
//       !thought
//         ? res.status(404).json({ message: 'No thought with this id!' })
//         : res.json(thought)
//     )
//     .catch((err) => res.status(500).json(err));
// },

module.exports = resolvers;