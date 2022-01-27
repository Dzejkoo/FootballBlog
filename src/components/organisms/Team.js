import React from 'react';
import styled from 'styled-components';
import { PlayerCard } from '../moleculas/PlayerCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ViewWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PositionTitle = styled.h2`
  margin-right: 100%;
  margin-left: 30px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 15px;
`;

const cases = {
  Goalkeeper: 'Goalkeeper',
  Defender: 'Defender',
  Midfielder: 'Midfielder',
  Forward: 'Forward',
};

export const Team = ({ state: { post } }) => {
  const goalkeepers = post.filter((player) => player.position === cases.Goalkeeper);
  const defender = post.filter((player) => player.position === cases.Defender);
  const midfielder = post.filter((player) => player.position === cases.Midfielder);
  const forward = post.filter((player) => player.position === cases.Forward);

  return (
    <ViewWrapper>
      <Wrapper>
        <PositionTitle>{cases.Goalkeeper}</PositionTitle>
        {goalkeepers.map((playerData) => (
          <PlayerCard playerData={playerData} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Defender}</PositionTitle>
        {defender.map((playerData) => (
          <PlayerCard playerData={playerData} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Midfielder}</PositionTitle>
        {midfielder.map((playerData) => (
          <PlayerCard playerData={playerData} />
        ))}
      </Wrapper>
      <Wrapper>
        <PositionTitle>{cases.Forward}</PositionTitle>
        {forward.map((playerData) => (
          <PlayerCard playerData={playerData} />
        ))}
      </Wrapper>
    </ViewWrapper>
  );
};
