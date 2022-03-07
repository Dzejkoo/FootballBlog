import React, { useState } from 'react';
import { PlayerName } from '../../atoms/PlayerName/PlayerName';
import { WrapperCard, ShirtNumber, StyledModal } from './PlayerCard.styles';
import styled from 'styled-components';

export const PlayerCard = ({ playerData: { name, position, image, numberShirt } }, props) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <WrapperCard onClick={() => toggleModal()} position={position}>
        <PlayerName name={name} />
        <ShirtNumber>{numberShirt}</ShirtNumber>
        <img src={image} alt="Player" />
      </WrapperCard>
      <StyledModal isOpen={isOpen} onRequestClose={toggleModal}>
        <div>
          <PlayerName name={name} />
          <ShirtNumber>{numberShirt}</ShirtNumber>
          <img src={image} alt="Player" />
        </div>
        <button onClick={toggleModal}>Close</button>
      </StyledModal>
    </>
  );
};
