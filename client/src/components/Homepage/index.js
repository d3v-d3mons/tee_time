import React, { useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import auth from "../../utils/auth";
import { BEGIN_CREATE } from "../../utils/mutations";
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

export default function Homepage() {
  const [beginCreate] = useMutation(BEGIN_CREATE);
  const [queryPlayers, { name }] = useLazyQuery(QUERY_PLAYERS);
 
  const newGameHandler = async (e) => {
    e.preventDefault();
    if (!partyName || !gameType || !course) {
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
      }})
    } catch (err) {
      console.error(err);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");
  const [gameType, setGameType] = useState("");
  const [course, setCourse] = useState("");
  const [playerName, setPlayerName] = useState("");

  const [formComplete, setFormComplete] = useState("");

  
  const collection = [];
  const findPlayers = async (e) => {
    e.preventDefault();
    if(!partyName || !playerName) {
      alert('please enter player name');
    }
    try {
      const players = await queryPlayers({
        variables: {
          name: playerName,
        }
      })
      const returnedPlayers = players.data.getPlayers;
      console.log(returnedPlayers);
      for(let i = 0; i < returnedPlayers.length; i++) {
        collection.push( returnedPlayers[i] )
      }
      console.log(collection);
    } catch (err) {
      console.error(err);
    }
  }

  if (formComplete === true) {
    return (
      <>
        <form>
          <div value={partyName}></div>
          <Input className="playerName" type="text" value={playerName} placeholder="enter players name here" onChange={(e) => setPlayerName(e.target.value)}/>
          <Button colorScheme="blue" className="findPlayer" onClick={findPlayers}>Search</Button>
          <Button className="done" colorScheme="green"><Link to="/scorecard">Finished</Link></Button>
        </form>
          <div>
            <ul>
              <li>Player List</li>
              <li>{collection}</li>
            </ul>
          </div>
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
