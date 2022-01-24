import React from 'react';
import styled from 'styled-components';
import { PlayerName } from '../atoms/PlayerName/PlayerName';

const WrapperCard = styled.div`
  width: 180px;
  height: 150px;
`;

export const PlayerCard = ({ playerData: { name, age } }) => {
  return (
    <WrapperCard>
      <PlayerName name={name} />
    </WrapperCard>
  );
};
