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
  const [playerHandGrenades, setHandGrenades] = useState("");
  const [playerMulligans, setMulligans] = useState("");
  const [playerHandicap, setHandicap] = useState("");

  const [formComplete, setFormComplete] = useState("");


  const addAnother = async (e) => {
    e.preventDefault();
    if(!playerName) {
      alert('must fill out name field to add player');
    }
    try {
      return await addPlayer({
        variables: {
          name: playerName,
          handGrenades: playerHandGrenades,
          mulligans: playerMulligans,
          handicap: playerHandicap,
      }}).then((data) => {
        if(data) {
          console.log('player added');
        } 
      })
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
          <Input className="handGrenades" defaultValue={0} min={0} max={3} value={playerHandGrenades} onChange={(e) => setHandGrenades(e.target.value)} placeholder="enter number of hand grenades"/>
          <Input className="mulligans" defaultValue={0} min={0} max={3} value={playerMulligans} onChange={(e) => setMulligans(e.target.value)} placeholder="enter number of mulligans" />
          <Input className="handicap" defaultValue={0} min={0} max={5} value={playerHandicap} onChange={(e) => setHandicap(e.target.value)} placeholder="enter handicap amount(number)" /> 
        </form>
          <Button className="submitFinal" type="click" variant="blue"><Link to="/scorecard" />Let's hit the links now</Button>
          <Button className="realFormSubmitBtn" type="click" variant="blue" onClick={(e) => addAnother(e.target)}>
            Add more players
          </Button>
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
