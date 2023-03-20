import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MY_GAME, QUERY_GAMES } from "../../utils/queries";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  ADD_SCORE_ONE,
  ADD_SCORE_TWO,
  ADD_SCORE_THREE,
  ADD_SCORE_FOUR,
  ADD_SCORE_FIVE,
  ADD_SCORE_SIX,
  ADD_SCORE_SEVEN,
  ADD_SCORE_EIGHT,
  ADD_SCORE_NINE,
  ADD_SCORE_TEN,
  ADD_SCORE_ELEVEN,
  ADD_SCORE_TWELVE,
  ADD_SCORE_THIRTEEN,
  ADD_SCORE_FOURTEEN,
  ADD_SCORE_FIFTEEN,
  ADD_SCORE_SIXTEEN,
  ADD_SCORE_SEVENTEEN,
  ADD_SCORE_EIGHTEEN,
} from "../../utils/mutations";
import { getFragmentDefinition } from "@apollo/client/utilities";

export default function Scorecard() {
  const [queryGames] = useLazyQuery(QUERY_GAMES);
  const [getMyGame] = useLazyQuery(MY_GAME);
  const [addScoreOne] = useMutation(ADD_SCORE_ONE);
  const [addScoreTwo] = useMutation(ADD_SCORE_TWO);
  const [addScoreThree] = useMutation(ADD_SCORE_THREE);
  const [addScoreFour] = useMutation(ADD_SCORE_FOUR);
  const [addScoreFive] = useMutation(ADD_SCORE_FIVE);
  const [addScoreSix] = useMutation(ADD_SCORE_SIX);
  const [addScoreSeven] = useMutation(ADD_SCORE_SEVEN);
  const [addScoreEight] = useMutation(ADD_SCORE_EIGHT);
  const [addScoreNine] = useMutation(ADD_SCORE_NINE);
  const [addScoreTen] = useMutation(ADD_SCORE_TEN);
  const [addScoreEleven] = useMutation(ADD_SCORE_ELEVEN);
  const [addScoreTwelve] = useMutation(ADD_SCORE_TWELVE);
  const [addScoreThirteen] = useMutation(ADD_SCORE_THIRTEEN);
  const [addScoreFourteen] = useMutation(ADD_SCORE_FOURTEEN);
  const [addScoreFifteen] = useMutation(ADD_SCORE_FIFTEEN);
  const [addScoreSixteen] = useMutation(ADD_SCORE_SIXTEEN);
  const [addScoreSeventeen] = useMutation(ADD_SCORE_SEVENTEEN);
  const [addScoreEighteen] = useMutation(ADD_SCORE_EIGHTEEN);

  const players = [];
  const getGame = async () => {
    const game = await queryGames({
      variables: {
        partyName: partyName,
      },
    });
    setCourse(game.data.getGames.course);
    for (let i = 0; i < game.data.getGames.players.length; i++) {
      players.push(game.data.getGames.players[i]);
    }
    console.log(players[0].holeOne);

    if (players[0]) {
      setPlayer1(players[0].name);
      setPlayer1Score(players[0].holeOne);
      setPlayer1Score2(players[0].holeTwo);
      setPlayer1Score3(players[0].holeThree);
      setPlayer1Score4(players[0].holeFour);
      setPlayer1Score5(players[0].holeFive);
      setPlayer1Score6(players[0].holeSix);
      setPlayer1Score7(players[0].holeSeven);
      setPlayer1Score8(players[0].holeEight);
      setPlayer1Score9(players[0].holeNine);
      setPlayer1Score10(players[0].holeTen);
      setPlayer1Score11(players[0].holeEleven);
      setPlayer1Score12(players[0].holeTwelve);
      setPlayer1Score13(players[0].holeThirteen);
      setPlayer1Score14(players[0].holeFourteen);
      setPlayer1Score15(players[0].holeFifteen);
      setPlayer1Score16(players[0].holeSixteen);
      setPlayer1Score17(players[0].holeSeventeen);
      setPlayer1Score18(players[0].holeEighteen);
    }
    if (players[1]) {
      setPlayer2(players[1].name);
      setPlayer2Score(players[1].holeOne);
      setPlayer2Score2(players[1].holeTwo);
      setPlayer2Score3(players[1].holeThree);
      setPlayer2Score4(players[1].holeFour);
      setPlayer2Score5(players[1].holeFive);
      setPlayer2Score6(players[1].holeSix);
      setPlayer2Score7(players[1].holeSeven);
      setPlayer2Score8(players[1].holeEight);
      setPlayer2Score9(players[1].holeNine);
      setPlayer2Score10(players[1].holeTen);
      setPlayer2Score11(players[1].holeEleven);
      setPlayer2Score12(players[1].holeTwelve);
      setPlayer2Score13(players[1].holeThirteen);
      setPlayer2Score14(players[1].holeFourteen);
      setPlayer2Score15(players[1].holeFifteen);
      setPlayer2Score16(players[1].holeSixteen);
      setPlayer2Score17(players[1].holeSeventeen);
      setPlayer2Score18(players[1].holeEighteen);
    }
    if (players[2]) {
      setPlayer3(players[2].name);
      setPlayer3Score(players[2].holeOne);
      setPlayer3Score2(players[2].holeTwo);
      setPlayer3Score3(players[2].holeThree);
      setPlayer3Score4(players[2].holeFour);
      setPlayer3Score5(players[2].holeFive);
      setPlayer3Score6(players[2].holeSix);
      setPlayer3Score7(players[2].holeSeven);
      setPlayer3Score8(players[2].holeEight);
      setPlayer3Score9(players[2].holeNine);
      setPlayer3Score10(players[2].holeTen);
      setPlayer3Score11(players[2].holeEleven);
      setPlayer3Score12(players[2].holeTwelve);
      setPlayer3Score13(players[2].holeThirteen);
      setPlayer3Score14(players[2].holeFourteen);
      setPlayer3Score15(players[2].holeFifteen);
      setPlayer3Score16(players[2].holeSixteen);
      setPlayer3Score17(players[2].holeSeventeen);
      setPlayer3Score18(players[2].holeEighteen);
    }
    if (players[3]) {
      setPlayer4(players[3].name);
      setPlayer4Score(players[3].holeOne);
      setPlayer4Score2(players[3].holeTwo);
      setPlayer4Score3(players[3].holeThree);
      setPlayer4Score4(players[3].holeFour);
      setPlayer4Score5(players[3].holeFive);
      setPlayer4Score6(players[3].holeSix);
      setPlayer4Score7(players[3].holeSeven);
      setPlayer4Score8(players[3].holeEight);
      setPlayer4Score9(players[3].holeNine);
      setPlayer4Score10(players[3].holeTen);
      setPlayer4Score11(players[3].holeEleven);
      setPlayer4Score12(players[3].holeTwelve);
      setPlayer4Score13(players[3].holeThirteen);
      setPlayer4Score14(players[3].holeFourteen);
      setPlayer4Score15(players[3].holeFifteen);
      setPlayer4Score16(players[3].holeSixteen);
      setPlayer4Score17(players[3].holeSeventeen);
      setPlayer4Score18(players[3].holeEighteen);
    }
  };

  const [partyName, setPartyName] = useState("");
  const [course, setCourse] = useState("");
  const [gameMode, setGameMode] = useState("");
  const [gamePartyName, setGamePartyName] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  // HOLE ONE
  const [player1Score, setPlayer1Score] = useState("");
  const [player2Score, setPlayer2Score] = useState("");
  const [player3Score, setPlayer3Score] = useState("");
  const [player4Score, setPlayer4Score] = useState("");
  // HOLE TWO
  const [player1Score2, setPlayer1Score2] = useState("");
  const [player2Score2, setPlayer2Score2] = useState("");
  const [player3Score2, setPlayer3Score2] = useState("");
  const [player4Score2, setPlayer4Score2] = useState("");
  // HOLE THREE
  const [player1Score3, setPlayer1Score3] = useState("");
  const [player2Score3, setPlayer2Score3] = useState("");
  const [player3Score3, setPlayer3Score3] = useState("");
  const [player4Score3, setPlayer4Score3] = useState("");
  // HOLE FOUR
  const [player1Score4, setPlayer1Score4] = useState("");
  const [player2Score4, setPlayer2Score4] = useState("");
  const [player3Score4, setPlayer3Score4] = useState("");
  const [player4Score4, setPlayer4Score4] = useState("");
  // HOLE FIVE
  const [player1Score5, setPlayer1Score5] = useState("");
  const [player2Score5, setPlayer2Score5] = useState("");
  const [player3Score5, setPlayer3Score5] = useState("");
  const [player4Score5, setPlayer4Score5] = useState("");
  // HOLE SIX
  const [player1Score6, setPlayer1Score6] = useState("");
  const [player2Score6, setPlayer2Score6] = useState("");
  const [player3Score6, setPlayer3Score6] = useState("");
  const [player4Score6, setPlayer4Score6] = useState("");
  // HOLE SEVEN
  const [player1Score7, setPlayer1Score7] = useState("");
  const [player2Score7, setPlayer2Score7] = useState("");
  const [player3Score7, setPlayer3Score7] = useState("");
  const [player4Score7, setPlayer4Score7] = useState("");
  // HOLE EIGHT
  const [player1Score8, setPlayer1Score8] = useState("");
  const [player2Score8, setPlayer2Score8] = useState("");
  const [player3Score8, setPlayer3Score8] = useState("");
  const [player4Score8, setPlayer4Score8] = useState("");
  // HOLE NINE
  const [player1Score9, setPlayer1Score9] = useState("");
  const [player2Score9, setPlayer2Score9] = useState("");
  const [player3Score9, setPlayer3Score9] = useState("");
  const [player4Score9, setPlayer4Score9] = useState("");
  // HOLE TEN
  const [player1Score10, setPlayer1Score10] = useState("");
  const [player2Score10, setPlayer2Score10] = useState("");
  const [player3Score10, setPlayer3Score10] = useState("");
  const [player4Score10, setPlayer4Score10] = useState("");
  // HOLE ELEVEN
  const [player1Score11, setPlayer1Score11] = useState("");
  const [player2Score11, setPlayer2Score11] = useState("");
  const [player3Score11, setPlayer3Score11] = useState("");
  const [player4Score11, setPlayer4Score11] = useState("");
  // HOLE TWELVE
  const [player1Score12, setPlayer1Score12] = useState("");
  const [player2Score12, setPlayer2Score12] = useState("");
  const [player3Score12, setPlayer3Score12] = useState("");
  const [player4Score12, setPlayer4Score12] = useState("");
  // HOLE THIRTEEN
  const [player1Score13, setPlayer1Score13] = useState("");
  const [player2Score13, setPlayer2Score13] = useState("");
  const [player3Score13, setPlayer3Score13] = useState("");
  const [player4Score13, setPlayer4Score13] = useState("");
  // HOLE FOURTEEN
  const [player1Score14, setPlayer1Score14] = useState("");
  const [player2Score14, setPlayer2Score14] = useState("");
  const [player3Score14, setPlayer3Score14] = useState("");
  const [player4Score14, setPlayer4Score14] = useState("");
  // HOLE FIFTEEN
  const [player1Score15, setPlayer1Score15] = useState("");
  const [player2Score15, setPlayer2Score15] = useState("");
  const [player3Score15, setPlayer3Score15] = useState("");
  const [player4Score15, setPlayer4Score15] = useState("");
  // HOLE SIXTEEN
  const [player1Score16, setPlayer1Score16] = useState("");
  const [player2Score16, setPlayer2Score16] = useState("");
  const [player3Score16, setPlayer3Score16] = useState("");
  const [player4Score16, setPlayer4Score16] = useState("");
  // HOLE SEVENTEEN
  const [player1Score17, setPlayer1Score17] = useState("");
  const [player2Score17, setPlayer2Score17] = useState("");
  const [player3Score17, setPlayer3Score17] = useState("");
  const [player4Score17, setPlayer4Score17] = useState("");
  // HOLE EIGHTEEEN
  const [player1Score18, setPlayer1Score18] = useState("");
  const [player2Score18, setPlayer2Score18] = useState("");
  const [player3Score18, setPlayer3Score18] = useState("");
  const [player4Score18, setPlayer4Score18] = useState("");
  // ADD HOLE ONE
  const addHoleOne = async () => {
    const name = player1;
    const score = player1Score;
    const playerOne = await addScoreOne({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score;
      const playerTwo = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score;
      const playerThree = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score;
      const playerFour = await addScoreOne({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE TWO

  const addHoleTwo = async () => {
    const name = player1;
    const score = player1Score2;
    const playerOne = await addScoreTwo({
      variables: {
        name: name,
        score: score,
      },
    });
    if (player2) {
      const name = player2;
      const score = player2Score2;
      const playerTwo = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player3) {
      const name = player3;
      const score = player3Score2;
      const playerThree = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
    if (player4) {
      const name = player4;
      const score = player4Score2;
      const playerFour = await addScoreTwo({
        variables: {
          name: name,
          score: score,
        },
      });
    }
  };

  // ADD HOLE THREE

  const addHoleThree = async () => {

  }

  return (
    <>
      <Input
        className="getGameInput"
        value={partyName}
        onChange={(e) => setPartyName(e.target.value)}
      />
      <button type="click" onClick={getGame}>
        Get game
      </button>
      <div className="gameName">
        <h1>{gamePartyName}</h1>
      </div>
      <div className="course">
        <h1>{course}</h1>
      </div>
      <div className="gameType">
        <h1>{gameMode}</h1>
      </div>

      {/*    ----------------- HOLE ONE CARD ----------------    */}

      <div className="hole1 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 1</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player1Score)}
                defaultValue={0}
                min={0}
                onChange={setPlayer1Score}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player2Score)}
                defaultValue={0}
                min={0}
                onChange={setPlayer2Score}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player3Score)}
                defaultValue={0}
                min={0}
                onChange={setPlayer3Score}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player4Score)}
                defaultValue={0}
                min={0}
                onChange={setPlayer4Score}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleOne}>
            Save Scores
          </button>
        </Box>
      </div>

      {/* ----------------HOLE TWO CARD--------------- */}

      <div className="hole2 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 2</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player1Score2)}
                min={0}
                onChange={setPlayer1Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player2Score2)}
                min={0}
                onChange={setPlayer2Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player3Score2)}
                min={0}
                onChange={setPlayer3Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                value={parseInt(player4Score2)}
                min={0}
                onChange={setPlayer4Score2}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <button className="addScores" onClick={addHoleTwo}>
            Save Scores
          </button>
        </Box>
      </div>

      {/*    ------------------ HOLE THREE CARD --------------- */}

      <div className="hole3 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 3</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score3}
                min={0}
                onChange={setPlayer1Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score3}
                min={0}
                onChange={setPlayer2Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score3}
                min={0}
                onChange={setPlayer3Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score3}
                min={0}
                onChange={setPlayer4Score3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*   --------------- HOLE FOUR CARD ----------------- */}

      <div className="hole4 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 4</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score4}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score4}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score4}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score4}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*    ---------------- HOLE FIVE CARD ---------------- */}

      <div className="hole5 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 5</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score5}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score5}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score5}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score5}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*        ------------------ HOLE SIX CARD ------------------- */}

      <div className="hole6 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 6</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score6}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score6}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score6}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score6}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*      -------------- HOLE SEVEN CARD ----------------  */}

      <div className="hole7 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 7</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score7}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score7}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score7}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score7}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     ------------- HOLE EIGHT CARD ------------------ */}

      <div className="hole8 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 8</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score8}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score8}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score8}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score8}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*      --------------- HOLE NINE CARD ----------------- */}

      <div className="hole9 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 9</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score9}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score9}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score9}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score9}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*      -------------- HOLE TEN CARD -------------- */}

      <div className="hole10 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 10</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score10}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score10}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score10}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score10}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     --------------- HOLE ELEVEN CARD ------------ */}

      <div className="hole11 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 11</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score11}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score11}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score11}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score11}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*       ------------------- HOLE TWELVE CARD ------------------ */}

      <div className="hole12 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 12</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score12}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score12}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score12}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score12}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     ----------------- HOLE THIRTEEN CARD ------------      */}

      <div className="hole13 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 13</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score13}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score13}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score13}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score13}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*      -------------------  HOLE FOURTEEN CARD --------------------       */}

      <div className="hole14 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 14</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score14}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score14}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score14}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score14}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     ----------------- HOLE FIFTEEN CARD ---------------------      */}

      <div className="hole15 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 15</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score15}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score15}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score15}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score15}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     ------------------ HOLE SIXTEEN CARD ----------------     */}

      <div className="hole16 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 16</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score16}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score16}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score16}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score16}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     --------------- HOLE SEVENTEEN CARD -------------    */}

      <div className="hole17 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 17</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score17}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score17}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score17}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score17}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>

      {/*     ------------------ HOLE EIGHTEEN CARD ----------------    */}

      <div className="hole18 scores">
        <Box>
          <div className="holeNumber">
            <h1>Hole 18</h1>
          </div>
          <div className="player1">
            <h1>
              Player 1:{player1} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player1Score18}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player2">
            <h1>
              Player 2:{player2} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player2Score18}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player3">
            <h1>
              Player 3:{player3} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player3Score18}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
          <div className="player4">
            <h1>
              Player 4:{player4} Score:
              <NumberInput
                size="sm"
                maxW={20}
                defaultValue={player4Score18}
                min={0}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </h1>
          </div>
        </Box>
      </div>
    </>
  );
}
