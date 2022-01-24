import React from 'react';
import styled from 'styled-components';

const PlayerNameStyled = styled.h2`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
`;

export const PlayerName = ({ name }) => {
  return <PlayerNameStyled>{name}</PlayerNameStyled>;
};
