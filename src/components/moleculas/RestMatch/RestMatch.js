import React from 'react';
import { MatchWrapper } from '../LastMatch/LastMatch.styles';
import { InfoMatch } from '../../atoms/InfoMatch/InfoMatch';
import { Result } from '../Result/Result';
import { Spinner } from '../../atoms/Spinner/Spinner';

export const RestMatch = ({ data }) => {
  return (
    <MatchWrapper>
      <InfoMatch data={data} />
      <Result data={data} />
    </MatchWrapper>
  );
};
