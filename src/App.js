import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PlayerName } from './components/atoms/PlayerName/PlayerName';

const Wrapper = styled.div`
  background-color: yellow;
`;

export const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get('/arsenalPlayers')
      .then(({ data: { arsenalPlayers } }) => setPlayers(arsenalPlayers))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {players.map((playerData, i) => (
        <PlayerName key={i} playerData={playerData}></PlayerName>
      ))}
    </Wrapper>
  );
};
