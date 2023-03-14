import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import {
  Button,
  Form,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Input,
  Modal,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Homepage() {
  
    const newGameHandler = () => {
        
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [partyName, setPartyName] = useState("");

  return (
    <>
      {auth.loggedIn() ? (
        <><Button className="createGameBtn" onClick={onOpen}>Create New Game</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader className="createGameHeader">Craft your match</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={newGameHandler}>
                        <Input value={partyName} onChange={(e) => setPartyName(e.target.value)} type="text" className="formPartyName" placeholder="enter party name" />

                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
      ) : (
        <h1>Log in to view games</h1>
      )}
    </>
  );
}
