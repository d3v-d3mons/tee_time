import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ADD_PLAYER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function NewPlayer() {

  const [addPlayer] = useMutation(ADD_PLAYER);

  const handleNewPlayer = (e) => {
    e.preventDefault();
    if(!playerName) {
      alert('Player must have a name');
    }
    const newplayer = addPlayer({
      variables: {
        name: playerName,
        handGrenades: playerHandGrenades,
        mulligans: playerMulligans,
        handicap: playerHandicap,
      }
    })
    if(!newplayer) {
      alert('Player name already taken!')
    }
  }

  const incrementHandGrenades = () => {
    setHandGrenades(prevState => prevState+1)
  }
  const incrementMulligans = () => {
    setMulligans(prevState => prevState+1)
  }
  const incrementHandicap = () => {
    setHandicap(prevState => prevState+1)
  }

  const [playerName, setPlayerName] = useState("");
  const [playerHandGrenades, setHandGrenades] = useState(0);
  const [playerMulligans, setMulligans] = useState(0);
  const [playerHandicap, setHandicap] = useState(0);

  return (
    <>
      <form onSubmit={handleNewPlayer}>
        <label className="playerLabel">Enter name here:</label>
        <Input
          className="playerName"
          type="text"
          value={playerName}
          placeholder="enter players name here"
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <label className="playerLabel">Hand Grenades?:</label>
        <NumberInput
          className="handGrenades"
          value={playerHandGrenades}
          defaultValue={0}
          min={0}
          max={5}
          type="number"
          onChange={incrementHandGrenades}
        >
          <NumberInputField placeholder="Do you REALLY need the hand grenades?"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
          <label className="playerLabel">Mulligans?:</label>
        <NumberInput
          className="mulligans"
          defaultValue={0}
          min={0}
          max={5}
          value={playerMulligans}
          onChange={incrementMulligans}
        >
          <NumberInputField placeholder="How many mulligans?"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
          <label className="playerLabel">Handicap?:</label>
        <NumberInput
          className="handicap"
          defaultValue={0}
          min={0}
          max={5}
          value={playerHandicap}
          onChange={incrementHandicap}
        >
          <NumberInputField placeholder="enter handicap number here"/>
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      <Button className="submitFinal" type="submit" colorScheme="blue">
        Let's hit the links now
      </Button>
      </form>
        <Button type="button" colorScheme="green">Go to scorecard<Link to="/scorecard" /></Button>
    </>
  );
}