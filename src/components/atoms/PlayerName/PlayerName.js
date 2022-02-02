import React from 'react';

import { PlayerNameStyled } from './PlayerName.styles';

export const PlayerName = ({ name: { firstName, lastName } }) => {
  const firstWord = firstName.substring(0, 1);
  return (
    <PlayerNameStyled>
      {`${firstWord ? `${firstWord}.` : ``}`} {lastName}
    </PlayerNameStyled>
  );
};
