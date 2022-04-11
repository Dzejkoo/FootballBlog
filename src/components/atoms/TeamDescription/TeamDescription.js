import React from 'react';
import styled from 'styled-components';

export const TeamDescription = ({ isHeader, isEnemy, data: { homeTeam, awayTeam, goalsAwayTeam, goalsHomeTeam } }) => {
  return (
    <TeamDescriptionWrapper isEnemy={isEnemy}>
      <ScoredGoal isHeader={isHeader}>{isEnemy ? goalsAwayTeam : goalsHomeTeam}</ScoredGoal>
      <TeamName isHeader={isHeader}>{isEnemy ? awayTeam.team_name : homeTeam.team_name}</TeamName>
      <TeamLogo isHeader={isHeader} src="https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png" alt="" />
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
  padding: ${({ isHeader }) => (isHeader ? `20px` : `10px 5px`)};
  order: 1;
`;

export const TeamLogo = styled.img`
  display: block;
  width: ${({ isHeader }) => (isHeader ? `80px` : `40px`)};
  order: ${({ isHeader }) => (isHeader ? `3` : `0`)};
`;

export const ScoredGoal = styled.span`
  padding: ${({ isHeader }) => (isHeader ? `0px` : `10px`)};
  order: ${({ isHeader }) => (isHeader ? `1` : `0`)};
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.xl}` : `${theme.fontSize.l}`)};
`;
