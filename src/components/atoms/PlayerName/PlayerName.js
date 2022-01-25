import React from 'react';
import styled from 'styled-components';

const PlayerNameStyled = styled.h2`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  margin: 5px 0 0 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.black};
`;

export const PlayerName = ({ name: { firstName, secoundName } }) => {
  const firstWord = firstName.substring(0, 1);
  return (
    <PlayerNameStyled>
      {`${firstWord ? `${firstWord}.` : ``}`} {secoundName}
    </PlayerNameStyled>
  );
};
