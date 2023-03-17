const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        nickname: String
    }

    type Game {
        _id: ID
        partyName: String
        gameType: String
        course: String
        players: [Player]
    }

    type Player {
        _id: ID
        name: String
        handGrenades: Int
        mulligans: Int
        handicap: Int
        score: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: User
        getPlayers(name: String): [Player]
        getGames(partyName: String): Game
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        beginCreate(partyName: String!, gameType: String!, course: String!): Game
        addPlayer(name: String!, handGrenades: Int!, mulligans: Int!, handicap: Int!): Game
    }
`;

module.exports = typeDefs;