import React from 'react';
import { PlayerName } from '../../atoms/PlayerName/PlayerName';
import { WrapperCard } from './PlayerCard.styles';

export const PlayerCard = ({ playerData: { name, position, playerPhoto } }) => {
  return (
    <WrapperCard position={position}>
      <PlayerName name={name} />
      <img src={playerPhoto} alt="Player photo" />
    </WrapperCard>
  );
};
