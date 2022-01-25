import React from 'react';
import styled from 'styled-components';
import { PlayerCard } from '../moleculas/PlayerCard';

const Positions = styled.h2`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PlayersRole = ({ playerData, i }) => {
  return (
    <>
      <PlayerCard key={i} playerData={playerData}></PlayerCard>
    </>
  );
};
