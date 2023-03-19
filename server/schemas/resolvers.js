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
        game: async (parent, { _id }, context) => {
            if(context.user) {
                const game = await User.findById(context.user._id).populate('game')
                console.log(game.game._id);
                return game.game;
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
        beginCreate: async (parent, { args }, context) => {
            if(context.user) {
            const game = await new Game({ args });
            console.log(game);
            return await User.findByIdAndUpdate(context.user._id, { $push: { game: game } }); 
            }
            throw new AuthenticationError("must be logged in");
        },
        addPlayers: async (parent, { _id, name, score }) => {
            const player = await Player.create({ name, score });
            console.log(player);
            console.log(_id);
            await Game.findByIdAndUpdate(_id, { $push: { players: player } })
            return player;
        },
        updateGame: async (parent, id, args) => {
            const player = await Game.findOneByIdAndUpdate(id, args, { new: true });
            console.log(player);
            return player;
        },
        // beginCreate: async (parent, { data }, context) => {
        //     if(context.user) {
        //         const game = new Game({data});
        //         await User.findByIdAndUpdate(context.user._id, { $push: {game: game}});
        //     }
        //     throw new AuthenticationError("Must be logged in");
        // }
    }
};

module.exports = resolvers;