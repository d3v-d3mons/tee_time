import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MY_GAME, QUERY_GAMES } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { getFragmentDefinition } from "@apollo/client/utilities";

export default function Scorecard() {
  const [queryGames] = useLazyQuery(QUERY_GAMES);
  const [getMyGame] = useLazyQuery(MY_GAME);

  const getGame = async () => {
    const game = await queryGames({
      variables: {
        partyName: partyName
      }
    });
    console.log(game.data.getGames[0]);
    setGamePartyName(game.data.getGames[0].partyName);
    setPlayerName(game.data.getGames[0].players);

  }

  const [partyName, setPartyName] = useState("");
  const [gamePartyName, setGamePartyName] = useState("");
  const [playerName, setPlayerName] = useState("");

  return (
    <>
  <Input className="getGameInput" value={partyName} onChange={(e) => setPartyName(e.target.value)} />
    <button type="click" onClick={getGame}>Get game</button>
      {/* <div className="gameName"><h1>{partyName}</h1></div> */}
      {/* <div className="course">{course}</div> */}
      {/* <div className="gameType">{gameMode}</div> */}

      <div className="scoreTable">
          <h1>{gamePartyName}</h1>
        <table>
            <thead>
                <tr className="tabletop">
                    <th>Player</th>
                    <th>Hole 1</th>
                    <th>Hole 2</th>
                    <th>Hole 3</th>
                    <th>Hole 4</th>
                    <th>Hole 5</th>
                    <th>Hole 6</th>
                    <th>Hole 7</th>
                    <th>Hole 8</th>
                    <th>Hole 9</th>
                    <th>Hole 10</th>
                    <th>Hole 11</th>
                    <th>Hole 12</th>
                    <th>Hole 13</th>
                    <th>Hole 14</th>
                    <th>Hole 15</th>
                    <th>Hole 16</th>
                    <th>Hole 17</th>
                    <th>Hole 18</th>
                </tr>
                <tr className="player1">
                  <th>{playerName}</th>
                </tr>
            </thead>
            <tbody className="tablebody">
                {}
                
            </tbody>
        </table>
      </div>
    </>
  );
}
