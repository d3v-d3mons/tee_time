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
    partyName
    gameType
    course
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
mutation addPlayers($partyName: String!, $name: String!, $score: Int!) {
  addPlayers(partyName: $partyName, name: $name, score: $score) {
    players {
      score
    }
  }
}
`;

export const ADD_SCORE_ONE = gql`
mutation addScore1($name: String!, $score: String!) {
  addScore1(name: $name, score: $score) {
    name
    holeOne
  }
}
`;

export const ADD_SCORE_TWO = gql`
mutation addScore2($_id: ID!) {
  addScore2(_id: $_id) {
    name
    holeTwo
    _id
  }
}
`;

export const ADD_SCORE_THREE = gql`
mutation addScore3($_id: ID!) {
  addScore3(_id: $_id) {
    name
    holeThree
    _id
  }
}
`;

export const ADD_SCORE_FOUR = gql`
mutation addScore4($_id: ID!) {
  addScore4(_id: $_id) {
    name
    holeFour
    _id
  }
}
`;

export const ADD_SCORE_FIVE = gql`
mutation addScore5($_id: ID!) {
  addScore5(_id: $_id) {
    name
    holeFive
    _id
  }
}
`;

export const ADD_SCORE_SIX = gql`
mutation addScore6($_id: ID!) {
  addScore6(_id: $_id) {
    name
    holeSix
    _id
  }
}
`;

export const ADD_SCORE_SEVEN = gql`
mutation addScore7($_id: ID!) {
  addScore7(_id: $_id) {
    name
    holeSeven
    _id
  }
}
`;

export const ADD_SCORE_EIGHT = gql`
mutation addScore8($_id: ID!) {
  addScore8(_id: $_id) {
    name
    holeEight
    _id
  }
}
`;

export const ADD_SCORE_NINE = gql`
mutation addScore9($_id: ID!) {
  addScore9(_id: $_id) {
    name
    holeNine
    _id
  }
}
`;

export const ADD_SCORE_TEN = gql`
mutation addScore10($_id: ID!) {
  addScore10(_id: $_id) {
    name
    holeTen
    _id
  }
}
`;

export const ADD_SCORE_ELEVEN = gql`
mutation addScore11($_id: ID!) {
  addScore11(_id: $_id) {
    name
    holeEleven
    _id
  }
}
`;

export const ADD_SCORE_TWELVE = gql`
mutation addScore12($_id: ID!) {
  addScore12(_id: $_id) {
    name
    holeTwelve
    _id
  }
}
`;

export const ADD_SCORE_THIRTEEN = gql`
mutation addScore13($_id: ID!) {
  addScore13(_id: $_id) {
    name
    holeThirteen
    _id
  }
}
`;

export const ADD_SCORE_FOURTEEN = gql`
mutation addScore14($_id: ID!) {
  addScore14(_id: $_id) {
    name
    holeFourteen
    _id
  }
}
`;

export const ADD_SCORE_FIFTEEN = gql`
mutation addScore15($_id: ID!) {
  addScore15(_id: $_id) {
    name
    holeFifteen
    _id
  }
}
`;

export const ADD_SCORE_SIXTEEN = gql`
mutation addScore16($_id: ID!) {
  addScore16(_id: $_id) {
    name
    holeSixteen
    _id
  }
}
`;

export const ADD_SCORE_SEVENTEEN = gql`
mutation addScore17($_id: ID!) {
  addScore17(_id: $_id) {
    name
    holeSeventeen
    _id
  }
}
`;

export const ADD_SCORE_EIGHTEEN = gql`
mutation addScore18($_id: ID!) {
  addScore18(_id: $_id) {
    name
    holeEighteen
    _id
  }
}
`;

