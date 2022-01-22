import React from 'react';
import styled from 'styled-components';

const PlayerNameStyled = styled.h1`
  background-color: yellow;
`;

export const PlayerName = ({ playerData: { name } }) => {
  return <PlayerNameStyled>{name}</PlayerNameStyled>;
};
