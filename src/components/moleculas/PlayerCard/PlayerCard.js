import React from 'react';
import { PlayerName } from '../../atoms/PlayerName/PlayerName';
import { WrapperCard, ShirtNumber } from './PlayerCard.styles';

export const PlayerCard = ({ playerData: { name, position, image, numberShirt } }) => {
  return (
    <WrapperCard position={position}>
      <PlayerName name={name} />
      <ShirtNumber>{numberShirt}</ShirtNumber>
      <img src={image} alt="Player" />
    </WrapperCard>
  );
};
