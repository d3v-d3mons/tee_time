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
        getGame: async (parent, { partyName }) => {
            const params = {}
            if(partyName) {
                params.partyName = partyName;
            }
            return await Game.find(params).populate('players');
        }
    },
    Mutation: {
        games: async (parent, { partyName }) => {
            const game = await Game.findOne({ partyName });
            if(!game) {
                console.log('not a game')
            }
            return  game ;
        },
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
        addPlayer: async (parent, args, err) => {
            const player = await Player.create(args);
            console.log(player);
            return player;
        },
        // updatePlayer: async (parent, args) => {
        //     const player = await Game.findOneAndUpdate({

        //     })
        //     console.log(player);
        //     return player;
        // }
    }
};

module.exports = resolvers;