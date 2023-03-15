import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import { BEGIN_CREATE, ADD_PLAYER } from "../../utils/mutations";
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

export default function Homepage() {
  const [beginCreate] = useMutation(BEGIN_CREATE);
  const [addPlayer] = useMutation(ADD_PLAYER);

  const began = [];

  const newGameHandler = async (e) => {
    e.preventDefault();
    if (!partyName || !gameType || !course || !playerCount) {
      alert("you must fill all fields");
    }
    try {
      return await beginCreate({
        variables: {
          partyName: partyName,
          gameType: gameType,
          course: course,
        },
      }).then((data) => {
        if(data) {
          setFormComplete(true)
          console.log('working');
        }
      })
    } catch (err) {
      console.error(err);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");
  const [gameType, setGameType] = useState("");
  const [course, setCourse] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [playerHandicap, setPlayerHandicap] = useState("");
  const [playerName, setPlayerName] = useState("");
  // const playerNames = [];

  // const setPlayerName = (value) => {
  //   playerNames.push(value);
  // };

  const [formComplete, setFormComplete] = useState("");

  // const handlePlayer = async () => {
  //   for(let i = 0; i < playerNames.length; i++) {
  //     // addPlayer({
  //     //   variables: {
  //     //     name: playerNames[i],
  //     //   }
  //     // });
  //     console.log(playerNames[i]);
  //   }
  // };

  // const handlePlayerNames = () => {
  //   for(let i = 0; i < playerCount.length; i++) {

  //   }
  // }

  // const players = [];
  // for (let i = 0; i < playerCount; i++) {
  //   players.push(
  //     <Input
  //       className="playerNames"
  //       key={i}
  //       on={(e) => setPlayerName(e.target.value)}
  //       placeholder="enter player name"
  //     />
  //   )
  // }
  const addAnother = () => {

  }


  if (formComplete === true) {
    return (
      <>
        <form className="realForm">
          <Input
            className="realPartyName"
            type="text"
            value={partyName}
            placeholder={partyName}
          />
          <Input
            className="realCourseName"
            type="text"
            value={course}
            placeholder={course}
          />
          <Input
            className="realGameType"
            type="text"
            value={gameType}
            placeholder={gameType}
          />
          <Input className="realAddPlayer" type="text" value={playerName} placeholder="enter players name here" />
          <Button className="realFormSubmitBtn" type="click" variant="blue" onClick={addAnother}>
            Add more players
          </Button>
        </form>
      </>
    );
  }

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
                <form onSubmit={newGameHandler}>
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
                  <Input
                    className="playerCount"
                    value={playerCount}
                    onChange={(e) => setPlayerCount(e.target.value)}
                    placeholder="enter number of players"
                  />
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
                  <Button
                    type="submit"
                    className="submitBtn"
                    colorScheme="blue"
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
