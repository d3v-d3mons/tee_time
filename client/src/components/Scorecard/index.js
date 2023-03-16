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
  } from '@chakra-ui/react'
import { QUERY_GAMES } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";



export default function Scorecard () {
    const [queryGames] = useLazyQuery(QUERY_GAMES);
    
    
    const searchParty = (e) => {
        e.preventDefault();
        const game = queryGames({
            variables: {
                partyName: partyName,
            },
        })
        console.log(game);
    }

    const [partyName, setPartyName] = useState("");


    return(
        <>
        <Input className="partySearch" placeholder="search for a party" value={partyName} onChange={setPartyName} />
        <Button colorScheme="blue" onClick={searchParty}>Search</Button>
        
        <TableContainer>
            <Table>
                <TableCaption>Scorecard</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Player</Th>
                        <Th>Hole 1</Th>
                        <Th>Hole 2</Th>
                        <Th>Hole 3</Th>
                        <Th>Hole 4</Th>
                        <Th>Hole 5</Th>
                        <Th>Hole 6</Th>
                        <Th>Hole 7</Th>
                        <Th>Hole 8</Th>
                        <Th>Hole 9</Th>
                        <Th>Hole 10</Th>
                        <Th>Hole 11</Th>
                        <Th>Hole 12</Th>
                        <Th>Hole 13</Th>
                        <Th>Hole 14</Th>
                        <Th>Hole 15</Th>
                        <Th>Hole 16</Th>
                        <Th>Hole 17</Th>
                        <Th>Hole 18</Th>
                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
        </>
    );
};