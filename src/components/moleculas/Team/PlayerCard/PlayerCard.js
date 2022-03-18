import React, { useState } from 'react';
import { PlayerName } from '../../../atoms/PlayerName/PlayerName';
import { WrapperCard, ShirtNumber, StyledModal, WrapperModalCard } from './PlayerCard.styles';
import { WrapperProfileCard } from '../WrapperProfileCard/WrapperProfileCard';
import { ReactComponent as CloseIcon } from '../../../../assets/images/icon/icon-cancel.svg';
import styled from 'styled-components';

const PlayerProfile = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  padding: 15px 0;
  margin: 0 20px;
  position: relative;
  &::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const WrapperProfile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PlayerCard = ({ playerData: { name, position, image, numberShirt, born, debut, citizenship } }) => {
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
      <StyledModal position={position} isOpen={isOpen} onRequestClose={toggleModal}>
        <WrapperModalCard position={position}>
          <PlayerName isBig name={name} />
          <img src={image} alt="Player" />
        </WrapperModalCard>
        <WrapperProfile>
          <PlayerProfile>Player Profile</PlayerProfile>
          <WrapperProfileCard position={position} numberShirt={numberShirt} born={born} debut={debut} citizenship={citizenship} />
        </WrapperProfile>
        <button onClick={() => toggleModal()}>
          <CloseIcon />
        </button>
      </StyledModal>
    </>
  );
};
