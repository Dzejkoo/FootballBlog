import React from 'react';
import { PlayerName } from '../../atoms/PlayerName/PlayerName';
import { WrapperCard } from './PlayerCard.styles';

export const PlayerCard = ({ playerData: { name, position, image } }) => {
  console.log(image);
  return (
    <WrapperCard position={position}>
      <PlayerName name={name} />
      <img src={image} alt="Player photo"></img>
    </WrapperCard>
  );
};
