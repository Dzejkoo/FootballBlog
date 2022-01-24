import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { PlayerCard } from './components/moleculas/PlayerCard';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/globalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {players.map((playerData, i) => (
            <PlayerCard key={i} playerData={playerData}></PlayerCard>
          ))}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
