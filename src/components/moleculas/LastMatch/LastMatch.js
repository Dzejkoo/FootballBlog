import React from 'react';
import { LastMatchWrapper, Result, TeamWrapper, TeamLogo, TeamName, ScoredGoal, Separate } from './LastMatch.styles';
import { InfoMatch } from '../../atoms/InfoMatch/InfoMatch';
import ArsenalLogo from '../../../assets/images/logo/Arsenal-logo.png';
import WatfordLogo from '../../../assets/images/logo/Watford-logo.png';

export const LastMatch = () => {
  return (
    <LastMatchWrapper>
      <InfoMatch />
      <Result>
        <TeamWrapper>
          <TeamLogo src={WatfordLogo} alt="Watford logo" />
          <TeamName>Watford</TeamName>
          <ScoredGoal>2</ScoredGoal>
        </TeamWrapper>
        <Separate>-</Separate>
        <TeamWrapper>
          <ScoredGoal>3 </ScoredGoal>
          <TeamName>Arsenal</TeamName>
          <TeamLogo src={ArsenalLogo} alt="Watford logo" />
        </TeamWrapper>
      </Result>
    </LastMatchWrapper>
  );
};
