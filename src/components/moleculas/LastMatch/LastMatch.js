import React from 'react';
import { MatchWrapper } from './LastMatch.styles';
import { InfoMatch } from '../../atoms/InfoMatch/InfoMatch';
import { Result } from '../../moleculas/Result/Result';

export const LastMatch = ({ data }) => {
  return (
    <MatchWrapper>
      <InfoMatch isHeader data={data} />
      <Result isHeader data={data} />
    </MatchWrapper>
  );
};
