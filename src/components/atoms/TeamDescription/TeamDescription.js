import React from 'react';
import styled from 'styled-components';

export const TeamDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isEnemy }) => (isEnemy ? 'row' : 'row-reverse')};
  align-items: center;
`;

export const TeamName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 20px;
`;

export const TeamLogo = styled.img``;

export const ScoredGoal = styled.span`
  font-size: 36px;
`;

export const TeamDescription = ({ isEnemy, data: { homeTeam, awayTeam, goalesAwayTeam, goalsHomeTeam } }) => {
  return (
    <TeamDescriptionWrapper isEnemy={isEnemy}>
      <ScoredGoal>{isEnemy ? goalesAwayTeam : goalsHomeTeam}</ScoredGoal>
      <TeamName>{isEnemy ? awayTeam.team_name : homeTeam.team_name}</TeamName>
    </TeamDescriptionWrapper>
  );
};
