import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $nickname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      nickname: $nickname
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const BEGIN_CREATE = gql`
mutation beginCreate($partyName: String!, $gameType: String!, $course: String!) {
  beginCreate(partyName: $partyName, gameType: $gameType, course: $course) {
    players {
      name
    }
  }
}
`;

export const GAMES = gql`
mutation games($partyName: String!) {
  games(partyName: $partyName) {
    partyName
    gameType
    course
    players {
      name
    }
  }
}
`;

export const ADD_PLAYER = gql`
mutation addPlayer($name: String!, $handGrenades: Int!, $mulligans: Int!, $handicap: Int!) {
  addPlayer(name: $name, handGrenades: $handGrenades, mulligans: $mulligans, handicap: $handicap) {
    players {
      name
    }
  }
}
`;

