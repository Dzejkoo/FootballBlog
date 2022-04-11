import React from 'react';
import styled from 'styled-components';

export const TeamDescription = ({ isHeader, isEnemy, data: { homeTeam, awayTeam, goalesAwayTeam, goalsHomeTeam } }) => {
  return (
    <TeamDescriptionWrapper isEnemy={isEnemy}>
      <ScoredGoal isHeader={isHeader}>{isEnemy ? goalesAwayTeam : goalsHomeTeam}</ScoredGoal>
      <TeamName isHeader={isHeader}>{isEnemy ? awayTeam.team_name : homeTeam.team_name}</TeamName>
    </TeamDescriptionWrapper>
  );
};

export const TeamDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isEnemy }) => (isEnemy ? 'row' : 'row-reverse')};
  align-items: center;
`;

export const TeamName = styled.span`
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.xl}` : `${theme.fontSize.l}`)};
  padding: ${({ isHeader, theme }) => (isHeader ? `20px` : `10px`)};
`;

export const TeamLogo = styled.img``;

export const ScoredGoal = styled.span`
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.xl}` : `${theme.fontSize.l}`)};
`;
