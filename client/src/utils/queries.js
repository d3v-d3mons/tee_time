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

// export const QUERY_GAMES = gql`
//     query getGames($partyName: String) {
//         getGames(partyName: $partyName) {
//             _id
//             partyName
//             gameType
//             course
//             players {
//                 name
//                 handGrenades
//                 mulligans
//                 handicap
//                 score
//             }
//         }
//     }
// `;
