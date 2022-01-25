import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';
import { PlayerCard } from './components/moleculas/PlayerCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const cases = {
  Goalkeeper: 'Goalkeeper',
  Defender: 'Defender',
  Midfielder: 'Midfielder',
  Forward: 'Forward',
};

export const App = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get('/arsenalPlayers')
      .then(({ data: { arsenalPlayers } }) => setPlayers(arsenalPlayers))
      .catch((err) => console.log(err));
  }, []);

  const goalkeeper = players.filter((player) => player.position === cases.Goalkeeper);
  const defender = players.filter((player) => player.position === cases.Defender);
  const midfielder = players.filter((player) => player.position === cases.Midfielder);
  const forward = players.filter((player) => player.position === cases.Forward);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <h2>{cases.Goalkeeper}</h2>
          {goalkeeper.map((playerData, i) => (
            <PlayerCard key={i} playerData={playerData} />
          ))}
        </Wrapper>
        <Wrapper>
          <h2>{cases.Defender}</h2>
          {defender.map((playerData, i) => (
            <PlayerCard key={i} playerData={playerData} />
          ))}
        </Wrapper>
        <Wrapper>
          <h2>{cases.Midfielder}</h2>
          {midfielder.map((playerData, i) => (
            <PlayerCard key={i} playerData={playerData} />
          ))}
        </Wrapper>
        <Wrapper>
          <h2>{cases.Forward}</h2>
          {forward.map((playerData, i) => (
            <PlayerCard key={i} playerData={playerData} />
          ))}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
