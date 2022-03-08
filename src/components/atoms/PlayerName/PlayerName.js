import React from 'react';

import { PlayerNameStyled } from './PlayerName.styles';

export const PlayerName = ({ name: { firstName, lastName }, isBig }) => {
  const firstWord = firstName.substring(0, 1);
  return (
    <PlayerNameStyled isBig={isBig}>
      {`${firstWord ? `${firstWord}.` : ``}`} {lastName}
    </PlayerNameStyled>
  );
};
