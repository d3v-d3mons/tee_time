import React, { useState, useContext } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import auth from "../../utils/auth";
import { BEGIN_CREATE, ADD_PLAYER } from "../../utils/mutations";
import { QUERY_PLAYERS } from "../../utils/queries";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Input,
  Modal,
  useDisclosure,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GameContext } from "../../utils/GameContext";

export default function Homepage() {
  const [beginCreate] = useMutation(BEGIN_CREATE);
  const [addPlayers] = useMutation(ADD_PLAYER);

  const newGameHandler = async () => {
    if (!partyName || !gameType || !course) {
      alert("you must fill all fields");
    }
      const game = await beginCreate({
        variables: {
          partyName: partyName,
          gameType: gameType,
          course: course,
        },
      })
      console.log(game);
      window.location.replace("/newplayer")
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");
  const [gameType, setGameType] = useState("");
  const [course, setCourse] = useState("");
  // const [player1, setPlayer1] = useState("");
  // const [player2, setPlayer2] = useState("");
  // const [player3, setPlayer3] = useState("");
  // const [player4, setPlayer4] = useState("");

  return (
    <>
      {auth.loggedIn() ? (
        <>
          <Button className="createGameBtn" onClick={onOpen}>
            Create New Game
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="createGameHeader">
                Craft your match
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form>
                  <Input
                    value={partyName}
                    onChange={(e) => setPartyName(e.target.value)}
                    type="text"
                    className="formPartyName"
                    placeholder="enter party name"
                  />
                  <Stack spacing={3}>
                    <Select
                      placeholder="choose a course"
                      className="courseNamesSelect"
                      onChange={(e) => setCourse(e.target.value)}
                    >
                      <option className="courses" value="Fairlakes Golf Club">
                        Fairlakes Golf Club
                      </option>
                      <option className="courses" value="Ironwood Golf Course">
                        Ironwood Golf Course
                      </option>
                      <option className="courses" value="The Den at Fox Creek">
                        The Den at Fox Creek
                      </option>
                    </Select>
                  </Stack>
                  <Stack spacing={3}>
                    <Select
                      placeholder="choose a game"
                      onChange={(e) => setGameType(e.target.value)}
                    >
                      <option className="gameType" value="Standard">
                        Standard
                      </option>
                      <option className="gameType" value="Scramble">
                        Scramble
                      </option>
                      <option className="gameType" value="Funsies">
                        Just for Fun *includes hand grenades and mulligans
                      </option>
                      <option className="gameType" value="Range">
                        Driving Range
                      </option>
                    </Select>
                  </Stack>
                  {/* <Input
                    className="playerName"
                    type="text"
                    value={player1}
                    placeholder="enter player 1 name here"
                    onChange={(e) => setPlayer1(e.target.value)}
                  />
                  <Input
                    className="playerName"
                    type="text"
                    value={player2}
                    placeholder="enter player 2 name"
                    onChange={(e) => setPlayer2(e.target.value)}
                  />
                  <Input
                    className="playerName"
                    type="text"
                    value={player3}
                    placeholder="enter player 3 name"
                    onChange={(e) => setPlayer3(e.target.value)}
                  />
                  <Input
                    className="playerName"
                    type="text"
                    value={player4}
                    placeholder="enter player 4 name"
                    onChange={(e) => setPlayer4(e.target.value)}
                  /> */}
                  <Button
                    type="click"
                    className="submitBtn"
                    onClick={newGameHandler}
                  >
                    Let's Go!
                  </Button>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <Button className="createGameBtn" onClick={onOpen}>
            Create New Game
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="createGameHeader">
                Must be logged in to create new match
              </ModalHeader>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}
