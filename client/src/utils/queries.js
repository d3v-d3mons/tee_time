import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
        {
            user {
                firstName
                lastName
                nickname
            }
        }
`;

export const QUERY_PLAYERS = gql`
    query getPlayers($name: String) {
        getPlayers(name: $name) {
            _id
            name
            handGrenades
            mulligans
            handicap
            score
        }
    }
`;

export const QUERY_GAMES = gql`
    query getGames($partyName: String!) {
        getGames(partyName: $partyName) {
            _id
            partyName
            gameType
            course
            players {
                name
                score
            }
        }
    }
`;

export const GAME = gql`
 query game($_id: ID!) {
    game(_id: $_id) {
        _id
        partyName
        gameType
        course
        players {
            name
            score
        }
    }
 }
`;

export const MY_GAME = gql`
 {
    game {
        partyName
        gameType
        course
        players {
            name
            score
        }
    }
 }
`;
