const { AuthenticationError } = require('apollo-server-express');
const { User, Player, Game } = require('../models');
const { populate } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            if (context.user) {
                return await User.find();
            }
            throw new AuthenticationError('You must be logged in to see high scores');
        },
        getPlayers: async (parent, { name }) => {
            const params = {}
            if(name) {
                params.name = name;
            }
            return await Player.find(params).populate('name');
        },
        getGames: async (parent, { partyName }) => {
            const params = {}
            if(partyName) {
                params.partyName = partyName;
                const game = await Game.find(params).populate('players');
                return game;
            }
        },
        game: async (parent, { id }, context) => {
            if(context.id) {
                const game = await Game.findById(context.user._id).populate(players);
                return user.game.id(_id);
            }
            throw new AuthenticationError("Must be logged in");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
            throw new AuthenticationError('You must be logged in to complete this action');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect username or password');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect username or password');
            }
            const token = signToken(user);
            return { token, user };
        },
        beginCreate: async (parent, args) => {
            const game = await Game.create(args);
            console.log(game);
            return game; 
        },
        addPlayer: async (parent, args) => {
            const player = await Player.create(args);
            console.log(player);
            return player;
        },
        updateGame: async (parent, id, args) => {
            const player = await Game.findOneByIdAndUpdate(id, args, { new: true });
            console.log(player);
            return player;
        }
    }
};

module.exports = resolvers;