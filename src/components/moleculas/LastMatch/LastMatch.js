import React from 'react';
import { LastMatchWrapper, Result, Separate } from './LastMatch.styles';
import { InfoMatch } from '../../atoms/InfoMatch/InfoMatch';
import { TeamDescription } from '../../atoms/TeamDescription/TeamDescription';

export const LastMatch = ({ data }) => {
  return (
    <LastMatchWrapper>
      <InfoMatch />
      <Result>
        <TeamDescription data={data} />
        <Separate>-</Separate>
        <TeamDescription isEnemy data={data} />
      </Result>
    </LastMatchWrapper>
  );
};
