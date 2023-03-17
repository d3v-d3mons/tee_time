import React, { useState } from "react";
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
import { QUERY_GAMES } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";

export default function Scorecard() {
  const [queryGames] = useLazyQuery(QUERY_GAMES);

  const searchParty = async (e) => {
    e.preventDefault();
    const game = await queryGames({
      variables: {
        partyName: partyName,
      },
    });
    console.log(game);
  };



  const [partyName, setPartyName] = useState("");

  return (
    <>
      <Input
        className="partySearch"
        placeholder="search for a party"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
      />
      <Button colorScheme="blue" onClick={searchParty}>
        Search
      </Button>

      <div className="scoreTable">
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
            </thead>
            <tbody className="tablebody">
                {}
                
            </tbody>
        </table>
      </div>
    </>
  );
}
