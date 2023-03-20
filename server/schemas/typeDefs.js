const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        nickname: String
        game: [Game]
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
        score: Int
        holeOne: Int!
        holeTwo: Int!
        holeThree: Int!
        holeFour: Int!
        holeFive: Int!
        holeSix: Int!
        holeSeven: Int!
        holeEight: Int!
        holeNine: Int!
        holeTen: Int!
        holeEleven: Int!
        holeTwelve: Int!
        holeThirteen: Int!
        holeFourteen: Int!
        holeFifteen: Int!
        holeSixteen: Int!
        holeSeventeen: Int!
        holeEighteen: Int!
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: User
        game: Game
        getPlayers(_id: ID!): Player
        getGames(partyName: String!): Game
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): Auth
        updateUser(firstName: String!, lastName: String!, nickname: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
        beginCreate(partyName: String!, gameType: String!, course: String!): Game
        addPlayers(partyName: String!, name: String!, score: Int!): Game
        updateGame(name: String!, handGrenades: Int!, mulligans: Int!, handicap: Int!): Game
        addScore1(name: String!, score: String!): Player
        addScore2(_id: ID!): Player
        addScore3(_id: ID!): Player
        addScore4(_id: ID!): Player
        addScore5(_id: ID!): Player
        addScore6(_id: ID!): Player
        addScore7(_id: ID!): Player
        addScore8(_id: ID!): Player
        addScore9(_id: ID!): Player
        addScore10(_id: ID!): Player
        addScore11(_id: ID!): Player
        addScore12(_id: ID!): Player
        addScore13(_id: ID!): Player
        addScore14(_id: ID!): Player
        addScore15(_id: ID!): Player
        addScore16(_id: ID!): Player
        addScore17(_id: ID!): Player
        addScore18(_id: ID!): Player
    }
`;

module.exports = typeDefs;