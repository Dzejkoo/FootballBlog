import React from 'react';

import { PlayerNameStyled } from './PlayerName.styles';

export const PlayerName = ({ name: { firstName, secoundName } }) => {
  const firstWord = firstName.substring(0, 1);
  return (
    <PlayerNameStyled>
      {`${firstWord ? `${firstWord}.` : ``}`} {secoundName}
    </PlayerNameStyled>
  );
};
